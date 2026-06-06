---
title: HTML
date: 2026-06-08 10:00:00
categories: [网安基础]
---

[TOC]



## HTML

### 1.什么是HTML？

HTML是HypeText Mark-up Language的简称，即超文本标记语言，是一种用于创建网页的标准标记语言。可以使用 HTML 来建立自己的网页，HTML 运行在浏览器上，由浏览器来解析。它不是一种编程语言（如java、C语言等），标记：就是标签。<标签名称></标签名称>。

白话：用**来写网页的一门语言，有很多标签组成**

> 所谓的超文本：
>
> 1、因为网页可以放图片、视频、音频等内容（超越文本限制）
>
> 2、还可以在网页中跳转到另一个网页中（超链接文本）

### 2.HTML的作用

用来开发**网页**

- 许多网络攻击（如 **XSS（跨站脚本）、SQL 注入、CSRF（跨站请求伪造）**）都针对 HTML 和 Web 技术。
- 攻击者利用 HTML 结构注入恶意代码
- **HTML 是 Web 安全的底层基础**，学习它不仅能帮助理解攻击手法，还能提升防御能力。无论是漏洞挖掘、渗透测试还是安全开发，HTML 知识都是必备技能。

### 3.网页的组成部分

- HTML：负责网页的架构；(骨架)
- CSS：负责网页的样式，美化；（衣服）
- JavaScript（JS）：负责网页的行为；（动作）

### 4.工具介绍

网站开发推荐工具vscode

需要装的插件有

![屏幕截图 2024-01-06 185548](https://gitee.com/lao-jiang-next-door/images/raw/master/屏幕截图 2024-01-06 185548.png)

如何创建项目？

在桌面创建一个文件

将文件拖入指定的区域 你那个创建的文件夹 也就变成了 项目文件夹

#### HTML文件的命名

- HTML文件的文件后缀名为.html
- 文件名中不要包含特殊符号，如空格、$等。

### 5.结构介绍

这个尖括号 就叫标签

1. 生成结构

vscode会自动帮我们生成html结构

```
shift + !     回车
```

什么叫标签

2. 结构详情介绍

- html由标签和属性构成。
- 标签：长在尖角号后面的第一个单词就是标签
- 属性：长在标签后面的并且用空格隔开的，称作 属性
- 结构标签介绍

![企业微信截图_17159486448134](https://gitee.com/lao-jiang-next-door/images/raw/master/企业微信截图_17159486448134.png)

```html
<!-- 文档类型声明 告诉浏览器当前文档使用的是HTML5标准。它帮助浏览器正确地解析和呈现网页内容。 -->
<!DOCTYPE html>
<!-- html为根标签  最外部的标签 -->
<html lang="en">
  <!-- head包裹的称为头部区域 是负责对网页进行设置标题、编码格式以及引入css和js文件的。-->
<head>
  <!-- 网页采用utf-8的编码格式 -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- 网页的标题 -->
  <title>Document</title>
</head>
<!-- body标签 内容标签 白色部分 如果要写内容应该把内容写到body标签里面 -->
<body>
  <!-- 如何打开？1.直接点击源文件 2.通过vscode来打开 可以实时的刷新 -->
  <!-- 第二种方式需要搜索插件 liveserve 这个插件的作用是打开网页并实时刷新 -->
  <!-- 安装成功了 右击就会多出一个open -->
  <!-- 文件有一个自动保存需要勾选上这样你写的代码就会实时的更新 -->
  床前明月光 疑是地上霜
</body>
</html>
```

![屏幕截图 2024-01-16 185032](https://gitee.com/lao-jiang-next-door/images/raw/master/屏幕截图 2024-01-16 185032.png)

### 6.网页中常见的标签

1. **标题标签**

- h1标签
- h2标签
- h3标签
- h4标签
- h5标签
- h6标签

```html
<body>
  <h1>hello word</h1>
  <h2>hello word</h2>
  <h3>hello word</h3>
  <h4>hello word</h4>
  <h5>hello word</h5>
  <h6>hello word</h6>
</body>
```

2.**段落标签**

一般用来写文章段落

- p标签

```html
<body>
  <p>这是一段文章</p>
</body>
```

3.强调标签

- em标签

作用：倾斜

```html
<body>
  <em>我是作用是倾斜</em>
</body>
```

- b标签

作用：加粗

```html
<body>
  <b>我是作用是加粗</b>
</body>
```

4.换行标签

- br标签

```html
<body>
  窗前明月光<br>疑是地上霜<br>举头望明月<br>低头思故乡
</body>
```

5.分割标签

- hr标签

作用：标签变成分割线

```html
<body>
  你好呀
  <hr>
  哈哈
</body>
```

6.div标签

- div标签 是用来布局的，并没有语义，只是一个区块

```html
<body>
  <div>
    这只是一个盒子
  </div>
</body>
```

7.span标签

没有语义，一般用来包裹文字,让文字更好被选中。

```html
<body>
  <span>
    这只是一个盒子
  </span>
</body>
```

8.img标签(图片标签)

- 作用：插入图片

- 属性

1. src：引入图片路径

2. alt：对图片的描述。 如果由于某种原因，浏览器无法加载图像，它将显示 `alt` 属性中的文本，以提供对图像内容的描述。

3. height：设置图片的高

4. width：设置图片的宽度


```html
<body>
  <!-- 可以链接引入 -->
  <img src="https://img1.baidu.com/it/u=176026669,1083095139&fm=253&fmt=auto&app=120&f=JPEG?w=879&h=500" alt="如果图片加载失败">
  <!-- 也可以本地引入 -->
  <img src="图片.png" alt="">
</body>
```

9.a标签

- 作用：点击跳转到另一个网页
- href：指定访问资源的URL
- target：指定打开资源的方式

​				_self：默认值，在当前页面打开

​				_blank：在新的页面打开

```html
<body>
  <a href="https://baidu.com">点击当前页面跳转到百度</a>
  <a href="https://baidu.com" target="_blank">点击重新打开页面跳转到百度</a>
</body>
```

10.列表标签

- 有序列表 ol li

```html
<body>
  <!-- ol标签定义无序列表 -->
  <ol>
    <!-- li标签定义列表项目 -->
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
  </ol>
</body>
```

- 无序列表  ul ol

```html
<body>
  <!-- ul标签定义无序列表 -->
  <ul>
    <!-- li标签定义列表项目 -->
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
  </ul>
</body>
```



11.表单标签

在网页中主要负责数据采集功能

表单项(元素)：不同类型的input元素、下拉列表、文本域等

from标签:用于创建用户输入表单的容器标签

action属性：指定表单提交的地址

method属性：提交的方式

```html
<form action="URL" method="GET|POST">
  <!-- 表单元素在这里 -->
</form>
```

input标签

​	type属性：

- text：默认值、定义单行输入字段

```html
<body>
  <input type="text">
</body>
```

- password：定义密码字段

```html
<body>
  <input type="password">
</body>
```

- radio：定义单选框

```html
<body>
  <!--单选框-->
  <!--想要多个单选按钮互斥，需要把他们的name设为一样的-->
  <!--要格外注意加value及对应的值，这样提交以后会把这个值提交进去，从而区分
是男是女-->
  <input type="radio" name="gender" value="1">男
  <input type="radio" name="gender" value="2">女
</body>
```

- checkbox：复选框

```html
<body>
  <input type="checkbox" name="hobby" value="1">旅游
  <input type="checkbox" name="hobby" value="2">电影
  <input type="checkbox" name="hobby" value="3">阅读
</body>
```

- button：按钮

```html
<body>
  <!--按钮-->
  <input type="button" value="一个普通按钮">
  <button>一个普通按钮的第二个写法</button>
</body>
```

- file：会将文件上传

```html
<body>
  <!--上传文件-->
  <input type="file"><br>
</body>
```

video：视频

```html
<!-- controls：显示视频控制栏（播放、暂停、音量等）。
  autoplay：视频加载后自动播放。 -->
<video controls autoplay width = "400px">
    <source src="mda-qdqxj7s4d6njpv18.mp4">
</video>
```

select：定义下拉列表，option定义列表项

```html
<body>
  <select>
    <option value="1">红色</option>
    <option value="2">绿色</option>
    <option value="3">黄色</option>
  </select>
</body>
```

textarea ：文本域

```html
<body>
  <textarea></textarea>
</body>
```
