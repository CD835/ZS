import type { FeedGroup } from '../app/types/feed'
// 友链检测 CLI 需要使用显式导入和相对路径
import { myFeed } from '../blog.config'
// eslint-disable-next-line unused-imports/no-unused-imports
import { getFavicon, getGithubAvatar, getGithubIcon, getOciqGroupAvatar, getOicqAvatar, OicqAvatarSize } from './utils/img'

export default [
	// #region Clarity
	{
		name: '菜狗',
		desc: '一个真正的man',
		// @keep-sorted { "keys": ["date"] }
		entries: [
			myFeed,
			/* ========从此处新增友链======== */
		],
	},
	// #endregion
	// #region 邻居
	{
		name: '邻居',
		desc: '众星群聚',
		// @keep-sorted { "keys": ["date"] }
		entries: [
			{
				author: '康可',
				sitenick: '康可',
				title: '康可ing',
				desc: 'conquer,conquer,conquer...',
				link: 'https://blog.yanxisishi.top/',
				icon: 'https://q1.qlogo.cn/g?b=qq&nk=3497863696&s=640',
				avatar: 'https://q1.qlogo.cn/g?b=qq&nk=3497863696&s=640',
				date: '2026-06-06',
				comment: 'web大佬',
			},
			{
				author: 'HACKED',
				sitenick: 'HACKED',
				title: 'ss0t_HACKED',
				desc: '一个刚刚入门的pwner，大手子ddw',
				link: 'https://blog.ss0t-hacked.top',
				icon: 'https://q1.qlogo.cn/g?b=qq&nk=3255154997&s=640',
				avatar: 'https://q1.qlogo.cn/g?b=qq&nk=3255154997&s=640',
				date: '2026-06-09',
				comment: 'pwn大佬',
			},
		],
	},
	// #endregion
	// #region 真正的大佬
	{
		name: '真正的大佬',
		desc: '"AI时代"创作分享/知识内容收集。',
		// @keep-sorted { "keys": ["date"] }
		entries: [
			{
				author: '叁玖',
				sitenick: '叁玖',
				title: '叁玖-blog',
				desc: 'We will all move forward.',
				link: 'https://www.sanjiuctf.com/?p=3573',
				icon: 'https://www.sanjiuctf.com/wp-content/uploads/2025/09/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250526120834.jpg',
				avatar: 'https://www.sanjiuctf.com/wp-content/uploads/2025/09/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250526120834.jpg',
				date: '2026-08-07',
				comment: '网安大佬',
			},
			{
				author: 'chen7chen',
				sitenick: 'chen7chen',
				title: '小chen妙妙屋',
				desc: 'chen7chen',
				link: 'https://blog.xchstudy.org/',
				icon: 'https://blog.xchstudy.org/img/images.webp',
				avatar: 'https://blog.xchstudy.org/img/images.webp',
				date: '2026-08-07',
				comment: '大佬中的大佬',
			},
			{
				author: 'zsm',
				sitenick: 'zsm',
				title: "Zsm's blog",
				desc: 'Time can create anything',
				link: 'https://www.zhuangsanmeng.xyz/',
				icon: 'https://www.zhuangsanmeng.xyz/_astro/zsm.b_3yiEHw_1MjqTP.webp',
				avatar: 'https://www.zhuangsanmeng.xyz/_astro/zsm.b_3yiEHw_1MjqTP.webp',
				date: '2026-08-07',
				comment: '久经沙场的大佬',
			},
			{
				author: 'Spring',
				sitenick: 'Spring',
				title: 'Spring的储藏室',
				desc: '”若有一天你会离开…”',
				link: 'https://www.springbot.top/',
				icon: 'https://www.springbot.top/wp-content/uploads/2025/11/小然招手.jpg',
				avatar: 'https://www.springbot.top/wp-content/uploads/2025/11/小然招手.jpg',
				date: '2026-08-07',
				comment: '全栈大佬',
			},
		],
	},
	// #endregion
	// #region 小南梁
	{
		name: '小南梁',
		desc: 'xnn友链快',
		// @keep-sorted { "keys": ["date"] }
		entries: [
			{
				author: 'A1right',
				sitenick: 'A1right',
				title: 'A1right的小窝',
				desc: '你好，我是 A1right。这里记录 Web 安全、CTF 题解与 Agent 渗透实验。',
				link: 'https://itsa1right.ink/',
				icon: 'https://itsa1right.ink/images/a1right-avatar.png',
				avatar: 'https://itsa1right.ink/images/a1right-avatar.png',
				date: '2026-08-08',
				comment: 'web,渗透,agent的xnn',
			},
			{
				author: 'chzu老张的小白之路',
				sitenick: 'chzu老张的小白之路',
				title: 'chzu老张的小白之路',
				desc: '记录学习网络安全之路，从入门到退出',
				link: 'https://www.zjz946649.top/',
				icon: 'https://www.zjz946649.top/_vercel/image?url=%2Favatar.jpg&w=1536&q=100',
				avatar: 'https://www.zjz946649.top/_vercel/image?url=%2Favatar.jpg&w=1536&q=100',
				date: '2026-08-08',
				comment: '专注于web的xnn',
			},
		],
	},
	// #endregion
] satisfies FeedGroup[]
