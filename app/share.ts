import type { ShareItem } from './types/share'

/**
 * 「分享」下载区数据 —— 出现在 文章列表页 / 友链页 / 归档页 的底部。
 *
 * 【怎么加自己的工具】
 *   1. 把文件放进 `public/downloads/`，然后写 url: '/downloads/你的文件.zip'；
 *      或者直接用网盘 / 对象存储的外链，写完整 https 地址。
 *   2. group 相同会自动归到同一栏；第一次出现的新 group 会新起一栏。
 *   3. 整个数组为空时，页面上不会出现这个区域。
 *
 * 【注意】
 *   GitHub 单文件上限 100MB、仓库建议 1GB 以内，所以体积大的虚拟机镜像请走外部直链，
 *   不要把镜像直接提交进仓库。
 *
 * 下面几条是可直接用的示例（都指向官网下载页），按需替换成你自己的即可。
 */
export default [
	{
		group: '工具',
		name: '7-Zip',
		desc: '开源压缩 / 解压工具，解压镜像与安装包必备。',
		url: 'https://www.7-zip.org/download.html',
		icon: 'tabler:file-zip',
	},
	{
		group: '工具',
		name: 'Wireshark',
		desc: '网络抓包与协议分析。',
		url: 'https://www.wireshark.org/download.html',
		icon: 'tabler:network',
	},
	{
		group: '工具',
		name: 'Nmap',
		desc: '端口扫描与服务识别。',
		url: 'https://nmap.org/download.html',
		icon: 'tabler:radar',
	},
	{
		group: '工具',
		name: 'Burp Suite Community',
		desc: 'Web 渗透测试代理，社区版免费。',
		url: 'https://portswigger.net/burp/communitydownload',
		icon: 'tabler:bug',
	},
	{
		group: '虚拟机',
		name: 'VirtualBox',
		desc: '免费开源虚拟机软件，跑靶机与测试环境。',
		url: 'https://www.virtualbox.org/wiki/Downloads',
		icon: 'tabler:box',
	},
	{
		group: '虚拟机',
		name: 'Kali Linux 虚拟机镜像',
		desc: '预装渗透测试工具的官方镜像，导入即用。',
		url: 'https://www.kali.org/get-kali/#kali-virtual-machines',
		icon: 'simple-icons:kalilinux',
	},
] satisfies ShareItem[]
