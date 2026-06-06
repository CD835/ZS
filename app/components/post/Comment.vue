<script setup lang="tsx">
import type { TippyComponent } from 'vue-tippy'

const appConfig = useAppConfig()

const commentEl = useTemplateRef('comment')
const popoverEl = useTemplateRef<TippyComponent>('popover')
const popoverJumpTo = ref('')
const popoverInputEl = useTemplateRef('popover-input')
const showUndo = ref(false)

const popoverBind = ref<TippyComponent['$props']>({})

/** 评论区链接守卫 */
useEventListener(commentEl, 'click', (e) => {
	if (!(e.target instanceof Element))
		return

	const popoverTarget = e.target.closest('a[target="_blank"]')
	if (!(popoverTarget instanceof HTMLAnchorElement))
		return

	e.preventDefault()
	popoverEl.value?.hide()

	popoverJumpTo.value = safelyDecodeUriComponent(popoverTarget.href)
	popoverBind.value = {
		getReferenceClientRect: () => popoverTarget.getBoundingClientRect(),
		triggerTarget: popoverTarget,
	}

	nextTick(checkUndoable)
	popoverEl.value?.show()
}, { capture: true })

function checkUndoable() {
	showUndo.value = popoverInputEl.value?.textContent !== popoverJumpTo.value
}

function undo() {
	if (!popoverInputEl.value)
		return
	popoverInputEl.value.textContent = popoverJumpTo.value
	checkUndoable()
}

function confirmOpen() {
	window.open(popoverInputEl.value?.textContent, '_blank')
}

const colorMode = useColorMode()

onMounted(() => {
	const script = document.createElement('script')
	script.src = 'https://giscus.app/client.js'
	script.setAttribute('data-repo', 'CD835/ZS')
	script.setAttribute('data-repo-id', 'R_kgDOSyIpww')
	script.setAttribute('data-category', 'Announcements')
	script.setAttribute('data-category-id', 'DIC_kwDOSyIpw84C-nV6')
	script.setAttribute('data-mapping', 'pathname')
	script.setAttribute('data-strict', '0')
	script.setAttribute('data-reactions-enabled', '1')
	script.setAttribute('data-emit-metadata', '0')
	script.setAttribute('data-input-position', 'bottom')
	script.setAttribute('data-theme', colorMode.preference === 'dark' ? 'dark' : 'light')
	script.setAttribute('data-lang', 'zh-CN')
	script.setAttribute('crossorigin', 'anonymous')
	script.async = true

	const giscusDiv = document.getElementById('giscus')
	if (giscusDiv)
		giscusDiv.appendChild(script)
})

watch(() => colorMode.preference, (theme) => {
	const iframe = document.querySelector<HTMLIFrameElement>('.giscus-frame')
	if (!iframe)
		return

	const giscusTheme = theme === 'dark' ? 'dark' : 'light'
	iframe.contentWindow?.postMessage(
		{ giscus: { setConfig: { theme: giscusTheme } } },
		'https://giscus.app',
	)
})
</script>

<template>
	<section ref="comment" class="z-comment">
		<h3 class="text-creative">
			评论区
		</h3>

		<!-- interactive 默认会把气泡移动到 triggerTarget 的父元素上 -->
		<Tooltip
			ref="popover"
			v-bind="popoverBind"
			:append-to="() => commentEl!"
			interactive
			:aria="{ expanded: false }"
			trigger="focusin"
		>
			<template #content>
				<div class="popover-confirm">
					<span
						ref="popover-input"
						class="input"
						contenteditable="plaintext-only"
						spellcheck="false"
						@input="checkUndoable"
						@keydown.enter.prevent="confirmOpen"
						v-text="popoverJumpTo"
					/>

					<button
						v-if="showUndo"
						aria-label="恢复原始内容"
						@click="undo()"
					>
						<Icon name="tabler:arrow-back-up" />
					</button>

					<ZButton
						primary
						text="访问"
						@click="confirmOpen"
					/>
				</div>
			</template>
		</Tooltip>

		<div id="giscus" class="giscus-wrapper" />
	</section>
</template>

<style lang="scss" scoped>
.z-comment {
	margin: 3rem 1rem;

	> h3 {
		margin-top: 3rem;
		font-size: 1.25rem;
	}
}

:deep() > [data-tippy-root] > .tippy-box {
	padding: 0;
}

.popover-confirm {
	display: flex;
	align-items: center;
	overflow-wrap: anywhere;

	> .input {
		min-width: 0;
		padding: 0.3em 0.6em;
		outline: none;
	}

	> button {
		flex-shrink: 0;
		align-self: stretch;
		padding: 0.3em;
		border-radius: 0 0.5em 0.5em 0;
	}
}

.giscus-wrapper {
	margin: 2em 0;
}
</style>
