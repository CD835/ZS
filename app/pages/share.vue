<script setup lang="ts">
const appConfig = useAppConfig()
const layoutStore = useLayoutStore()
layoutStore.setAside([])

useSeoMeta({
	title: '分享',
	ogType: 'website',
	description: `${appConfig.title}分享的工具与虚拟机下载。`,
})
</script>

<template>
<div class="mobile-only">
	<BlogHeader to="/" suffix="分享" tag="h1" />
</div>

<ShareTools />
</template>
