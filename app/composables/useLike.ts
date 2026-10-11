/**
 * 友链爱心计数。
 *
 * - 计数存在远端公共计数服务（默认 Abacus，无需注册、无需邮箱），所有访客共享同一个数字。
 * - 「我是否已点过赞」记在 localStorage，同一浏览器只累加一次，避免有人反复点刷数。
 * - 远端不可用时自动降级为本地计数：爱心依然能点，只是数字只有自己看得到。
 * - 所有请求只在客户端发起，静态生成（nuxt generate）阶段不会访问外部服务。
 */

interface CountResponse {
	value: number
}

/** 远端计数缓存：同一次浏览会话内切换页面不必重复请求 */
const countCache = new Map<string, number>()

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
const LOCAL_COUNT_STORE = 'blog:like:count'

function readStore(store: string): Record<string, number> {
	if (!import.meta.client)
		return {}
	try {
		return JSON.parse(localStorage.getItem(store) || '{}') as Record<string, number>
	}
	catch {
		return {}
	}
}

function writeStore(store: string, data: Record<string, number>) {
	try {
		localStorage.setItem(store, JSON.stringify(data))
	}
	catch {
		// 无痕模式等场景下不可写，忽略即可
	}
}

export function useLike(id: MaybeRefOrGetter<string>) {
	const appConfig = useAppConfig()
	const key = computed(() => `${appConfig.like?.namespace || 'blog'}:${toValue(id)}`)

	/** 远端服务地址；留空表示只使用本地计数 */
	const endpoint = computed(() => (appConfig.like?.api || '').replace(/\/+$/, ''))

	const count = ref<number>()
	const liked = ref(false)
	const busy = ref(false)

	const localCount = () => readStore(LOCAL_COUNT_STORE)[key.value] ?? 0

	function fetchRemote(action: 'get' | 'hit') {
		return $fetch<CountResponse>(`${endpoint.value}/${action}/${key.value}`)
	}

	/** 拉取计数：优先远端，失败则退回本地 */
	async function load() {
		if (!endpoint.value) {
			count.value = localCount()
			return
		}

		const cached = countCache.get(key.value)
		if (cached !== undefined) {
			count.value = cached
			return
		}

		try {
			const value = await withLimit(() => fetchRemote('get'))
			countCache.set(key.value, value)
			count.value = value ?? 0
		}
		catch (error) {
			// 404 表示这个 key 还没有人点过赞，属于正常情况
			if ((error as { statusCode?: number })?.statusCode === 404) {
				countCache.set(key.value, 0)
				count.value = 0
				return
			}
			count.value = localCount()
		}
	}

	/** 点赞：同一浏览器只记一次 */
	async function like() {
		if (busy.value || liked.value)
			return

		busy.value = true
		liked.value = true
		const likedStore = readStore(LIKED_STORE)
		likedStore[key.value] = 1
		writeStore(LIKED_STORE, likedStore)

		try {
			if (!endpoint.value)
				throw new Error('远端计数服务未配置')

			const value = await withLimit(() => fetchRemote('hit'))
			countCache.set(key.value, value)
			count.value = value ?? count.value
		}
		catch {
			// 远端失败：本地累加，保证爱心仍然可用
			const store = readStore(LOCAL_COUNT_STORE)
			const next = (store[key.value] ?? 0) + 1
			store[key.value] = next
			writeStore(LOCAL_COUNT_STORE, store)
			countCache.delete(key.value)
			count.value = next
		}
		finally {
			busy.value = false
		}
	}

	onMounted(() => {
		liked.value = (readStore(LIKED_STORE)[key.value] ?? 0) === 1
		void load()
	})

	return { count, liked, busy, like }
}
