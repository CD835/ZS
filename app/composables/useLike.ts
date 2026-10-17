/**
 * 友链爱心点赞，可重复点击取消。
 *
 * 【为什么用两个计数器】
 * 计数服务 Abacus 只支持「加一」和「读取」，没有减法端点（/set、/update、负值 /hit 都不支持）。
 * 所以每条友链用两个计数器（Abacus 路径是 /hit/{namespace}/{key}）：
 *   key = `${safeKey}.like`    被点赞的次数
 *   key = `${safeKey}.unlike`  被取消点赞的次数
 * 界面上展示的是两者之差（净点赞数），这样「取消」在视觉上就是真的减一。
 *
 * 【为什么要带 ?t= 随机参数】
 * Abacus 前面有 CDN，/get 的结果会被缓存（实测同一路径会返回旧值甚至缓存的 404），
 * /hit 命中缓存还会导致计数不再增长。所以读写都拼一个时间戳参数绕开缓存。
 *
 * 【key 为什么要处理】
 * 原来直接把完整链接（含 `://`）当 key，斜杠会把 URL 路径切碎，服务端收到的是错的 key。
 * 这里把链接转成只含字母数字和 `-` 的安全 key，可读且不会破坏路径。
 *
 * 远端不可用时降级为本地计数：爱心仍能点/取消，只是数字只有自己看得到。
 * 所有请求只在客户端发起，静态生成阶段不会访问外部服务。
 */

interface CountResponse {
	value: number
}

interface LikeStats {
	like: number
	unlike: number
}

/** 远端计数缓存：key -> { like, unlike }，一次会话内切换页面不重复请求 */
const statsCache = new Map<string, LikeStats>()

/** 限制并发请求数，避免友链页几十张卡片同时打满计数服务 */
const MAX_CONCURRENT = 4
let running = 0
const waiting: (() => void)[] = []

async function withLimit<T>(task: () => Promise<T>): Promise<T> {
	if (running >= MAX_CONCURRENT)
		await new Promise<void>(resolve => waiting.push(resolve))

	running++
	try {
		return await task()
	}
	finally {
		running--
		waiting.shift()?.()
	}
}

const LIKED_STORE = 'blog:like:liked'

function readLiked(): Record<string, number> {
	if (!import.meta.client)
		return {}
	try {
		return JSON.parse(localStorage.getItem(LIKED_STORE) || '{}') as Record<string, number>
	}
	catch {
		return {}
	}
}

function writeLiked(data: Record<string, number>) {
	try {
		localStorage.setItem(LIKED_STORE, JSON.stringify(data))
	}
	catch {
		// 无痕模式等场景下不可写，忽略即可
	}
}

/** 把任意链接转成只含 [a-z0-9-] 的稳定 key */
function toSafeKey(input: string) {
	return input
		.toLowerCase()
		.replace(/^https?:\/\//, '')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '')
		.slice(0, 64) || 'unknown'
}

export function useLike(id: MaybeRefOrGetter<string>) {
	const appConfig = useAppConfig()
	const namespace = appConfig.like?.namespace || 'blog'
	const safeKey = computed(() => toSafeKey(toValue(id)))

	/** 远端服务地址；留空表示只使用本地计数 */
	const endpoint = computed(() => (appConfig.like?.api || '').replace(/\/+$/, ''))

	const likeKey = computed(() => `${safeKey.value}.like`)
	const unlikeKey = computed(() => `${safeKey.value}.unlike`)

	const count = ref<number>()
	const liked = ref(false)
	const busy = ref(false)

	function readCount(key: string) {
		return withLimit(() => $fetch<CountResponse>(`${endpoint.value}/get/${namespace}/${key}?t=${Date.now()}`))
			.then(res => res?.value ?? 0)
			.catch((error) => {
				// 404 = 这个 key 还没有人点过，属于正常情况
				if ((error as { statusCode?: number })?.statusCode === 404)
					return 0
				throw error
			})
	}

	function hitCount(key: string) {
		return withLimit(() => $fetch<CountResponse>(`${endpoint.value}/hit/${namespace}/${key}?t=${Date.now()}`))
			.then(res => res?.value ?? 0)
	}

	function applyStats(stats: LikeStats) {
		count.value = Math.max(0, stats.like - stats.unlike)
	}

	/** 拉取两个计数器；远端不可用时保持 undefined，不显示数字 */
	async function load() {
		if (!endpoint.value)
			return

		const cached = statsCache.get(safeKey.value)
		if (cached) {
			applyStats(cached)
			return
		}

		try {
			const [like, unlike] = await Promise.all([readCount(likeKey.value), readCount(unlikeKey.value)])
			const stats = { like, unlike }
			statsCache.set(safeKey.value, stats)
			applyStats(stats)
		}
		catch {
			count.value = undefined
		}
	}

	/** 点赞 / 取消点赞 */
	async function toggle() {
		if (busy.value)
			return

		busy.value = true
		const nextLiked = !liked.value
		liked.value = nextLiked

		const store = readLiked()
		if (nextLiked)
			store[safeKey.value] = 1
		else
			delete store[safeKey.value]
		writeLiked(store)

		try {
			if (!endpoint.value)
				throw new Error('远端计数服务未配置')

			const target = nextLiked ? likeKey.value : unlikeKey.value
			const value = await hitCount(target)

			const cached = statsCache.get(safeKey.value)
			if (cached) {
				if (nextLiked)
					cached.like = value
				else
					cached.unlike = value
				applyStats(cached)
			}
			else {
				// 缓存缺失（之前加载失败过）时重新拉一次，保证差值准确
				const [like, unlike] = await Promise.all([readCount(likeKey.value), readCount(unlikeKey.value)])
				const stats = { like, unlike }
				statsCache.set(safeKey.value, stats)
				applyStats(stats)
			}
		}
		catch {
			// 远端失败：本地先加减，保证爱心可用
			const delta = nextLiked ? 1 : -1
			count.value = Math.max(0, (count.value ?? 0) + delta)
			statsCache.delete(safeKey.value)
		}
		finally {
			busy.value = false
		}
	}

	onMounted(() => {
		liked.value = (readLiked()[safeKey.value] ?? 0) === 1
		void load()
	})

	return { count, liked, busy, toggle }
}
