import type { ShareItem } from './types/share'

/**
 * 「分享」页面的下载数据 —— 页面地址 /share，左侧导航「分享」。
 *
 * 工具包托管在 GitHub Releases（tag: tools-v1），不占仓库体积，
 * 链接形如 https://github.com/CD835/ZS/releases/download/tools-v1/<文件名>
 *
 * 【怎么再加自己的工具】
 *   1. 小文件：放进 `public/downloads/`，写 url: '/downloads/你的文件.zip'
 *      （站内路径会自动补上部署子路径 /ZS/，不用手写前缀）
 *   2. 大文件：传到 Releases，然后写完整的 https 地址
 *   3. group 相同的条目会自动归到同一栏；出现新的 group 会新起一栏
 *   4. 数组为空时，分享页会显示占位提示，不会变成空白页
 */

const RELEASE = 'https://github.com/CD835/ZS/releases/download/tools-v1/'

/** 拼一个 Release 资产链接 */
const asset = (name: string) => RELEASE + name

export default [
	// #region 卸载工具
	{
		group: '卸载工具',
		name: 'Geek Uninstaller',
		desc: '轻量卸载工具，卸载后自动清理残留注册表项。',
		url: asset('geek.zip'),
		size: '3.06 MB',
		icon: 'tabler:trash',
	},
	{
		group: '卸载工具',
		name: 'HiBit Uninstaller',
		desc: '带强制卸载、批量卸载与残留清理的便携版。',
		url: asset('HiBitUninstaller-Portable.zip'),
		size: '5.75 MB',
		icon: 'tabler:trash',
	},
	{
		group: '卸载工具',
		name: 'BCUninstaller',
		desc: '可按数字签名扫描已安装程序，批量卸载。',
		url: asset('BCUninstaller-6.3.0-net8.zip'),
		version: '6.3.0',
		size: '11.79 MB',
		icon: 'tabler:trash',
	},
	// #endregion

	// #region 系统清理与优化
	{
		group: '系统清理与优化',
		name: 'Dism++',
		desc: '系统映像管理与空间回收，清理更新残留、组件存储。',
		// 文件名含 "++"，GitHub 的下载地址要求编码成 %2B%2B，否则会 404
		url: asset('Dism%2B%2B-10.1.1002.1B.zip'),
		version: '10.1.1002.1B',
		size: '3.59 MB',
		icon: 'tabler:tools',
	},
	{
		group: '系统清理与优化',
		name: 'BleachBit',
		desc: '开源清理工具，重点清理浏览器缓存与隐私痕迹。',
		url: asset('BleachBit-Portable.zip'),
		size: '12.38 MB',
		icon: 'tabler:brush',
	},
	// #endregion

	// #region 启动项与进程排查
	{
		group: '启动项与进程排查',
		name: 'Sysinternals Suite',
		desc: '微软官方整套系统工具，进程/句柄/服务/网络排查必备。',
		url: asset('SysinternalsSuite.zip'),
		size: '192.23 MB',
		icon: 'tabler:brand-windows',
	},
	{
		group: '启动项与进程排查',
		name: 'Autoruns',
		desc: '查看并禁用全部自启动项：登录项、服务、计划任务、驱动。',
		url: asset('Autoruns.zip'),
		size: '3.04 MB',
		icon: 'tabler:list',
	},
	{
		group: '启动项与进程排查',
		name: 'Process Explorer',
		desc: '进程树与 DLL 加载查看，可定位被哪个进程占用。',
		url: asset('ProcessExplorer.zip'),
		size: '3.47 MB',
		icon: 'tabler:binary-tree',
	},
	{
		group: '启动项与进程排查',
		name: 'WizTree',
		desc: '图形化磁盘占用分析，秒级扫出大文件与目录。',
		url: asset('wiztree-4.31-portable.zip'),
		version: '4.31',
		size: '7.43 MB',
		icon: 'tabler:chart-treemap',
	},
	{
		group: '启动项与进程排查',
		name: 'ContextMenuManager',
		desc: '管理鼠标右键菜单，禁用冗余项。',
		url: asset('ContextMenuManager.zip'),
		size: '0.94 MB',
		icon: 'tabler:menu-2',
	},
	{
		group: '启动项与进程排查',
		name: 'SoftCnKiller',
		desc: '垃圾软件/流氓软件扫描清理，配合下方黑名单数据使用。',
		url: asset('SoftCnKiller-2.88.zip'),
		version: '2.88',
		size: '1.33 MB',
		icon: 'tabler:bug',
		code: '0000',
	},
	// #endregion

	// #region 安全与拦截
	{
		group: '安全与拦截',
		name: '火绒安全',
		desc: '轻量国产杀软，拦截弹窗与捆绑安装。',
		url: asset('huorong-6.0.12.1-x64.exe'),
		version: '6.0.12.1',
		size: '68.27 MB',
		icon: 'tabler:shield',
	},
	{
		group: '安全与拦截',
		name: '卡巴斯基 免费版',
		desc: '卡巴斯基免费版安装包（简体中文），基础防护。',
		url: asset('kaspersky-21.27.6.532-zh-hans.exe'),
		version: '21.27.6.532',
		size: '6.71 MB',
		icon: 'tabler:shield-lock',
	},
	{
		// 这个安装包发布时的文件名是 startup.exe，实际是卡巴斯基标准版
		group: '安全与拦截',
		name: '卡巴斯基 标准版',
		desc: '卡巴斯基标准版安装包（简体中文），功能比免费版更全。',
		url: asset('startup.exe'),
		version: '21.26.4.406',
		size: '6.68 MB',
		icon: 'tabler:shield-check',
	},
	{
		group: '安全与拦截',
		name: 'AdwCleaner',
		desc: '专清广告软件、浏览器劫持与流氓工具条。',
		url: asset('adwcleaner.exe'),
		size: '9.18 MB',
		icon: 'tabler:sparkles',
	},
	// #endregion

	// #region 多线程下载
	{
		group: '多线程下载',
		name: 'aria2',
		desc: '命令行多线程下载器，支持 HTTP/BT/磁力。',
		url: asset('aria2-1.37.0-win-64bit.zip'),
		version: '1.37.0',
		size: '2.36 MB',
		icon: 'tabler:download',
	},
	{
		group: '多线程下载',
		name: 'Motrix',
		desc: 'aria2 的图形界面版，开箱即用的多线程下载器。',
		url: asset('Motrix-1.8.19-x64.exe'),
		version: '1.8.19',
		size: '62.67 MB',
		icon: 'tabler:cloud-download',
	},
	// #endregion

	// #region 数据与脚本
	{
		group: '数据与脚本',
		name: 'SoftCnKiller 黑名单数据',
		desc: 'AppData 流氓目录、扫描路径、签名等规则数据。',
		url: asset('SoftCnKiller-data.zip'),
		size: '10 KB',
		icon: 'tabler:database',
	},
	{
		group: '数据与脚本',
		name: '排查脚本',
		desc: '扫描 AppData 流氓目录、检查启动项与浏览器劫持的 PowerShell 脚本。',
		url: asset('cleanup-scripts.zip'),
		size: '20 KB',
		icon: 'tabler:file-code',
	},
	{
		group: '数据与脚本',
		name: '工具包文档',
		desc: '工具清单与使用说明（后续会更新为更完整的版本）。',
		url: asset('cleanup-toolkit-docs.zip'),
		size: '60 KB',
		icon: 'tabler:book',
	},
	// #endregion
] satisfies ShareItem[]
