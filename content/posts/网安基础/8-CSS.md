# CSS

### 1.什么是css

是一组样式设置的规则，用于控制页面的外观样式

### 2.为什么使用css

**Web安全与渗透测试**：在分析XSS（跨站脚本攻击）、CSRF（跨站请求伪造）等Web漏洞时，理解CSS有助于识别恶意代码如何通过样式注入篡改页面布局或伪装钓鱼界面

**前端漏洞挖掘**：

- CSS与HTML、JavaScript共同构成前端技术栈，安全人员需熟悉其交互逻辑。例如，某些DOM型XSS漏洞可能依赖CSS选择器触发

  

- 了解CSS的引入方式（如内联样式、外部样式表）有助于分析代码注入点

**钓鱼攻击防御**：

钓鱼网站常通过CSS模仿合法页面样式（如银行登录页），掌握CSS能更快识破此类视觉欺骗

CSS在网络安全中属于“加分项”

### 3.css作用

1. 页面外观美化
2. 布局和定位

### 4.css应用方式

#### 4.1.内部样式

在title标签下面建一个style标签 写css代码

```html
<head>
  <!-- 网页采用utf-8的编码格式 -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- 网页标题 -->
  <title>Document</title>
  <style>
    /* 直接写css代码 */
  </style>
</head>
```

### 5.选择器

css选择器是用来选择标签的，选出来以后给标签加样式

#### 5.1.标签选择器

也称为元素选择器，使用HTML标签作为选择器的名称

根据标签来选择标签，**以标签开头**，这种选择器影响范围大，一般用来做一些通用的设置

```html
<style>
  div{
      color: red;
    }
</style>
<body>
  <div>我是div标签</div>
</body>
```

#### 5.2.类选择器

使用自定义的名称，以 . 号作为前缀，然后再通过HTML标签的class属性调用类选择器

```html
<style>
  .name{
     color: red;
    }
  .sex{
     color: orangered;
    }
</style>
<body>
  <div class="name">我是div标签</div>
  <div class="name">我是div标签</div>
  <div class="sex">我是div标签</div>
</body>
```

#### 5.3.id选择器

根据id选择标签，**以#开头**，元素的id名称不能重复，所有id选择器只能对应于页面上一个元素，不能复

用，所以不推荐使用id作为选择器。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    #myid{
      color: pink;
    }
  </style>
</head>
<body>
  <div id="myid">我是一个div</div>
  <!-- 注意点：虽然给其他标签设置id="box"也可以设置样式，但是不推荐这样做，因为id是唯一的，以后js通过id只能获取一个唯一的标签对象。 -->
  <div id="myid">我是一个新的div</div>
</body>
</html>
```

### 6.css属性

#### 6.1.字体属性

| 属性             | 作用     |
| ---------------- | -------- |
| font-size        | 字体大小 |
| font-weight      | 字体粗细 |
| font-family      | 设置字体 |
| color            | 字体颜色 |
| background-color | 背景颜色 |

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- 网页采用utf-8的编码格式 -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- 网页标题 -->
    <title>Document</title>
    <!-- 以内部样式为例 -->
    <style>
      #name {
        /* font-size 设置字体大小 */
        font-size: 20px;
        /* font-size 设置字体粗细 */
        font-weight: 400;
        /* 设置字体 */
        font-family: '仿宋';
        /* 文本颜色 */
        color: blue;
        /* 背景颜色 */
        background-color: pink;
      }
    </style>
  </head>
  <!-- body包裹的称为内容区域 -->
  
  <body>
    <div id="name">我是div标签</div>
  </body>
</html>
```

#### 6.2.盒子模型

什么是盒子

网页其实就是一个一个盒子构成

盒子的width和height值固定时，如果盒子增加border和padding，盒子整体的尺寸会变大，所以盒子的真实尺寸为：

盒子宽度 = margin左右+border左右+padding左右+width

盒子高度 = margin上下+border上下+padding上下+height

| 属性          | 含义           | 单位 |
| ------------- | -------------- | ---- |
| width         | 宽度           | px   |
| height        | 高度           | px   |
| border        | 设置边框       | px   |
| padding       | 内边距         | px   |
| margin        | 外边距         | px   |
| border-radius | 设置边框四个角 | px   |

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .box1{
      width: 200px;
      height: 200px;
      background-color: pink;
      /* 边框 */
      border: 5px solid blue;
      /* 内边距 */
      padding: 30px;
      /* 外边距 */
      margin: 50px;
    }
  </style>
</head>
<body>
  <!-- 盒子模型主要是包括4个部分
  1.内容大小(width,height)
  2.边框大小(border)
  3.内边距大小(padding)
  4.外边距大小(margin) -->
  <div class="box1"></div>
</body>
</html>
```

**清除  自带的网页内外边距**

```html
* {
      margin: 0;
      padding: 0;
    }
```

### 7.定位（了解）

定位：将盒子定在某个位置，所以定位也是在摆放盒子，按照定位的方式移动盒子。

**定位模式：**

| 值       | 语义     |
| -------- | -------- |
| relative | 相对定位 |
| absolute | 绝对定位 |
| fixed    | 固定定位 |

#### 1.1相对定位relative

特点：

---

> 1.是元素在移动位置的时候，他是相对于自己原来的位置来移动的（移动位置的时候参照点是自己原来的位置）
>
> 2.原来的位置继续占有，后面的盒子仍然保留在原来的位置

位置：

- top：距离上面的位置
- bottom：距离下面的位置
- left：距离左边的位置
- right：距离右边的位置

相对定位 relative

当前位置也是自身位置 进行移动

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .box1{
      width: 200px;
      height: 200px;
      background-color: palegreen;
      position: relative;
      top: 100px;
      left: 100px;
    }
    .box2{
      width: 200px;
      height: 200px;
      background-color: red;
    }
  </style>
</head>
<body>
  <div class="box1"></div>
  <div class="box2"></div>
</body>
</html>
```

#### 1.2绝对定位  absolute

是在元素移动位置的时候，是相对于它的祖先元素（父，爷爷等标签）。

特点：

---

> 1.如果没有祖先元素或者祖先元素没有定位，则以浏览器为准定位
>
> 2.如果祖先元素有定位（相对，绝对，固定定位），则以最近一级的有定位祖先元素为参考点移动位置
>
> 3.原来的位置不再占有，后面的盒子会占用位置

**情况1：**父元素没有定位，则以浏览器为准定位

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    /* 父标签没有定位的时候 */
    .box1{
      width: 400px;
      height: 400px;
      background-color: palegreen;
      
    }
    .box2{
      width: 200px;
      height: 200px;
      background-color: red;
      position: absolute;
      /* 距离浏览器上面100px  距离右边200px */
      top: 100px;
      right: 200px;
    }
  </style>
</head>
<body>
  <div class="box1">
    <div class="box2"></div>
  </div>
  
</body>
</html>
```

**情况二：**如果祖先元素有定位（相对，绝对，固定定位），则以最近一级的有定位祖先元素为参考点移动位置

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    /* 爷爷标签有定位的时候 */
    .yeye{
      width: 600px;
      height: 600px;
      background-color: palegreen;
      position: relative;
    }
    .baba{
      width: 400px;
      height: 400px;
      background-color: red;
      /* position: relative; */
    }
    .erzi{
      width: 200px;
      height: 200px;
      background-color: pink;
      /* 为儿子添加绝对定位和偏移量 */
      position: absolute;
      top: 100px;
      right: 100px;
    }
  </style>
</head>
<body>
  <div class="yeye">
    <div class="baba">
      <div class="erzi"></div>
    </div>
  </div>
  
</body>
</html>
```

**子绝父相**：子级使用绝对定位，父级则需要相对定位（用的多）

> 1.子级绝对定位，不会占有位置，可以放到父盒子里面的任何一个地方，不会影响其他的兄弟盒子
>
> 2.父盒子需要加定位限制子盒子在父盒子内显示
>
> 3.父盒子布局时，需要占有位置，因此父亲只能是相对定位

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>

    .box1{
      width: 400px;
      height: 400px;
      background-color: red;
      /* box1是父盒子 使用相对定位 */
      position: relative;
    }
    .box2{
      width: 150px;
      height: 150px;
      background-color: blue;
      /* box2是子盒子 使用绝对定位 */
      position: absolute;
      top: 20px;
      left: 30px;
    }
    .box3{
      width: 150px;
      height: 200px;
      background-color: skyblue;
    }
    .box11{
      width: 500px;
      height: 500px;
      background-color: rgb(64, 243, 10);
    }
  </style>
</head>
<body>
  <div class="box1">
    <div class="box2">我是蓝色的盒子</div>
    <div class="box3">我是天空蓝的盒子</div>
  </div>
  <div class="box11">我是绿色的盒子</div>
</body>
</html>
```

#### 1.3固定定位 fixed

固定在一个位置

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box1{
            width: 100%;
            height: 100px;
            background-color: red;
            /* 开启固定定位 参照物也是浏览器*/
            position: fixed;
            /* 固定到哪里 */
            top: 0px;
        }
        .box2{
            width: 100%;
            height: 3000px;
            background-color: blueviolet;
        }
    </style>
</head>
<body>
    <div class="box1"></div>
    <div class="box2"></div>
</body>
</html>
```









