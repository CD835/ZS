export interface ShareItem {
	/** 分组名，例如「工具」「虚拟机」 */
	group: string
	/** 显示名称 */
	name: string
	/** 一句话说明 */
	desc?: string
	/**
	 * 下载地址。
	 * 可以是外部直链/官网下载页，也可以是把文件放进 public/downloads/ 后的站内路径
	 * （写 `/downloads/xxx.zip` 即可，部署子路径会自动补上）。
	 */
	url: string
	/** 版本号 */
	version?: string
	/** 文件大小，例如 `1.2 GB` */
	size?: string
	/** 图标（Iconify 名称），缺省使用 tabler:package */
	icon?: string
	/** 提取码 / 解压密码等补充信息 */
	code?: string
}
