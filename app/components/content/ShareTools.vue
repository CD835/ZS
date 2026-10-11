<script setup lang="ts">
import type { ShareItem } from '~/types/share'
import shareList from '~/share'

const baseURL = useRuntimeConfig().app.baseURL || '/'

/** 站内文件自动补上部署子路径（GitHub Pages 部署在 /ZS/ 下） */
function resolveUrl(url: string) {
	if (/^[a-z][\w+.-]*:\/\//i.test(url) || url.startsWith('//'))
		return url
	return `${baseURL.replace(/\/+$/, '')}/${url.replace(/^\/+/, '')}`
}

/** 按 group 归栏，保持配置里的先后顺序 */
const groups = computed(() => {
	const map = new Map<string, ShareItem[]>()
	for (const item of shareList) {
		const list = map.get(item.group)
		if (list)
			list.push(item)
		else
			map.set(item.group, [item])
	}
	return [...map.entries()]
})
</script>

<template>
<section class="share-tools proper-height">
	<h3 class="text-creative">
		<Icon name="tabler:share-3" />
		分享
	</h3>

	<p class="share-hint">
		常用工具与虚拟机镜像，可单独下载。
	</p>

	<div v-if="!groups.length" class="share-empty">
		<Icon name="tabler:package" />
		<p>工具还在上传中，敬请期待。</p>
	</div>

	<template v-else>
		<div v-for="[group, items] in groups" :key="group" class="share-group">
			<h4 class="share-group-title">
				{{ group }}
			</h4>

			<menu class="share-list">
				<li v-for="item in items" :key="item.url" class="share-item card upraise">
					<Icon class="share-icon" :name="item.icon || 'tabler:package'" />

					<div class="share-info">
						<div class="share-name">
							{{ item.name }}
							<span v-if="item.version" class="share-version">{{ item.version }}</span>
						</div>

						<p v-if="item.desc" class="share-desc">
							{{ item.desc }}
						</p>

						<div v-if="item.size || item.code" class="share-meta">
							<span v-if="item.size">
								<Icon name="tabler:database" />{{ item.size }}
							</span>
							<span v-if="item.code">
								<Icon name="tabler:key" />提取码 {{ item.code }}
							</span>
						</div>
					</div>

					<ZButton class="share-download" icon="tabler:download" text="下载" :to="resolveUrl(item.url)" />
				</li>
			</menu>
		</div>
	</template>
</section>
</template>

<style lang="scss" scoped>
.share-tools {
	margin: 1rem;

	> h3 {
		display: flex;
		gap: 0.3em;
		align-items: center;
		font-size: 1.25rem;
	}

	.share-hint {
		margin-top: 0.3em;
		font-size: 0.85em;
		color: var(--c-text-2);
	}
}

.share-empty {
	display: flex;
	flex-direction: column;
	gap: 0.5em;
	align-items: center;
	margin: 3em auto;
	color: var(--c-text-3);

	> .iconify {
		font-size: 2.5em;
		opacity: 0.5;
	}

	> p {
		font-size: 0.9em;
	}
}

.share-group-title {
	margin-top: 1.5em;
	font-size: 0.9em;
	font-weight: normal;
	color: var(--c-text-2);
}

.share-list {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(17em, 1fr));
	gap: 0.8em;
	margin-top: 0.6em;
}

.share-item {
	display: flex;
	gap: 0.8em;
	align-items: center;
	padding: 0.8em 1em;

	.share-icon {
		font-size: 1.8em;
		color: var(--c-text-2);
	}

	.share-info {
		flex: 1;
		min-width: 0;
	}

	.share-name {
		font-weight: bold;
		color: var(--c-text);
	}

	.share-version {
		margin-inline-start: 0.4em;
		font-size: 0.75em;
		font-weight: normal;
		opacity: 0.7;
	}

	.share-desc {
		margin-top: 0.1em;
		font-size: 0.8em;
		line-height: 1.3;
		color: var(--c-text-2);
	}

	.share-meta {
		display: flex;
		flex-wrap: wrap;
		gap: 0.1em 0.8em;
		margin-top: 0.3em;
		font-size: 0.75em;
		color: var(--c-text-3);

		> span {
			display: flex;
			gap: 0.2em;
			align-items: center;
		}
	}

	.share-download {
		flex-shrink: 0;
		font-size: 0.85em;
	}
}

@media (max-width: $breakpoint-phone) {
	.share-item {
		flex-wrap: wrap;
	}
}
</style>
