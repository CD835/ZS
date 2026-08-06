# 累了

[![框架](https://img.shields.io/badge/框架-Nuxt-00DC82?logo=Nuxt.js)](https://nuxt.com/)
[![CMS](https://img.shields.io/badge/CMS-Nuxt%20Content-00DC82?logo=Nuxt.js)](https://content.nuxt.com/)
[![部署平台](https://img.shields.io/badge/部署平台-GitHub%20Pages-222222?logo=GitHub)](https://pages.github.com/)
[![许可证](https://img.shields.io/badge/许可证-MIT-blue)](LICENSE)

我的个人博客，记录技术与生活，于 2026 年 6 月 5 日上线。

> 本博客基于 [纸鹿摸鱼处](https://github.com/L33Z22L11/blog-v3) 的主题 **Clarity** 搭建，感谢原作者的优秀作品。

## 特性

- 基于 Nuxt 4 + Nuxt Content 构建
- 静态生成（SSG），部署于 GitHub Pages
- 支持文章分类、归档、友链
- Atom 订阅源
- 响应式设计，深色模式

## 目录结构

项目使用 [Nuxt 4 项目目录结构](https://nuxt.com/docs/4.x/guide/directory-structure/app/app)。

```sh
.
├── app # 前端
│   ├── assets # 资源文件
│   ├── components # 组件
│   ├── composables # Vue 组合式函数
│   ├── pages # 页面
│   ├── plugins # Nuxt / Vue 插件
│   ├── stores # Pinia 状态管理
│   ├── types # 类型定义
│   ├── utils # 工具函数
│   ├── app.config.ts # 前端响应式配置★
│   └── app.vue # 基本布局
├── content # 文章
│   └── posts # 博客文章
├── modules # Nuxt 模块
├── public # 静态资源
├── server # 服务端
│   ├── api # 接口
│   └── routes # 根路由
├── blog.config.ts # 博客静态公共配置★
├── content.config.ts # Nuxt Content 配置
├── nuxt.config.ts # Nuxt 配置
└── redirects.json # 旧站点重定向配置
```

## 快速开始

### 安装依赖

```sh
pnpm i
```

### 创建文章

```sh
pnpm new
```

### 运行开发环境

```sh
pnpm dev
```

### 构建生产环境

```sh
pnpm generate
pnpm preview
```

### 部署

支持 Vercel、Netlify、Cloudflare Pages、GitHub Pages 等平台部署。建议采用静态（SSG）部署方式：

- 构建命令: `pnpm generate`
- 输出目录: `dist`
- 安装命令: `pnpm i`

## 许可证

- 项目本体：[MIT](LICENSE)
- 博客文章：[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans)
