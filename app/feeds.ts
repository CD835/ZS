import type { FeedGroup } from '../app/types/feed'
// 友链检测 CLI 需要使用显式导入和相对路径
import { myFeed } from '../blog.config'
// eslint-disable-next-line unused-imports/no-unused-imports
import { getFavicon, getGithubAvatar, getGithubIcon, getOciqGroupAvatar, getOicqAvatar, OicqAvatarSize } from './utils/img'

export default [
	// #region Clarity
	{
		name: '清晰体验',
		desc: '使用 Clarity 博客主题构建的网站。',
		// @keep-sorted { "keys": ["date"] }
		entries: [
			myFeed,
			/* ========从此处新增友链======== */
		],
	},
	// #endregion
	// #region 网上邻居
	{
		name: '网上邻居',
		desc: '哔——啵——电波通讯中，欢迎常来串门。',
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
				comment: '大佬',
			},
		],
	},
	// #endregion
	// #region 知识分享
	{
		name: '知识分享',
		desc: '"AI时代"创作分享/知识内容收集。',
		// @keep-sorted { "keys": ["date"] }
		entries: [
			/* ========从此处新增友链======== */
		],
	},
	// #endregion
	// #region 漫游
	{
		name: '漫游',
		desc: '网上冲浪时发现的精彩内容与常读订阅，与君共享。',
		// @keep-sorted { "keys": ["date"] }
		entries: [
			/* ========从此处新增友链======== */
		],
	},
	// #endregion
] satisfies FeedGroup[]
