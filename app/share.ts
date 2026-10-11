import type { ShareItem } from './types/share'

/**
 * 「分享」页面的下载数据 —— 页面地址 /share，左侧导航「分享」。
 *
 * 【怎么加自己的工具】
 *   1. 把文件放进 `public/downloads/`（这个目录已经建好），然后写：
 *        url: '/downloads/你的文件.zip'
 *      站内路径会自动补上部署子路径（GitHub Pages 的 /ZS/），不用手写前缀。
 *      也可以用网盘 / 对象存储的外链，写完整 https 地址即可。
 *   2. group 相同的条目会自动归到同一栏；出现新的 group 会新起一栏。
 *   3. 数组为空时，「分享」页会显示一个占位提示，不会变成空白页。
 *
 * 【注意】
 *   GitHub 单文件上限 100MB、仓库建议控制在 1GB 以内。体积大的虚拟机镜像
 *   请走外部直链，不要把镜像直接提交进仓库。
 *
 * 【示例】复制下面这段改一改即可：
 *
 *   {
 *     group: '工具',
 *     name: 'xxx',
 *     desc: '一句话说明',
 *     url: '/downloads/xxx.zip',
 *     version: 'v1.0',
 *     size: '12 MB',
 *     icon: 'tabler:package',
 *   },
 *   {
 *     group: '虚拟机',
 *     name: 'xxx 靶机',
 *     desc: '导入即用的虚拟机镜像',
 *     url: 'https://example.com/xxx.ova',
 *     size: '3.2 GB',
 *     code: 'abcd',
 *   },
 */
export default [
] satisfies ShareItem[]
