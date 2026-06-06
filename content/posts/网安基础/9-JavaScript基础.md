---
title: JavaScript基础
date: 2026-06-10 10:00:00
categories: [网安基础]
---

[TOC]



## JavaScript

### 1.Javascript介绍

JavaScript（简称“JS”）是当前最流行、应用最广泛的客户端脚本语言，用来在网页中添加一些动态效果与交互功能，在 Web 开发领域有着举足轻重的地位。

1. JavaScript 与 HTML 和 CSS 共同构成了我们所看到的网页

- HTML 用来定义网页的内容，例如标题、正文、图像等
- CSS 用来控制网页的外观，例如颜色、字体、背景等
- JavaScript 用来实时更新网页中的内容，例如从服务器获取数据并更新到网页中，修改某些标签的样式或其中的内容等，可以让网页更加生动。

### 2.JavaScript使用方法

内部式

在body内部写script标签、在标签内写js代码

```html
<body>
  <script>
    // 写jS代码
  </script>
</body>
```

外部式

在head头部标签中 通过script引入js文件

```html
<head>
  <!-- 网页采用utf-8的编码格式 -->
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- 网页标题 -->
  <title>Document</title>
  <!-- 引入js文件 -->
  <script src="./index.js"></script>
</head>
```

### 3.JavaScript输出

**console.log** 在控制台输出

注意：必须打开网页控制台才能看到输出的内容

```html
<body>
  <script>
    console.log("在这里写输出内容");
  </script>
</body>
```

**alert("hello js")** 在网页输出

注意：打开网页自动弹出

```html
<body>
  <script>
    alert("在这里写弹出的内容")
  </script>
</body>
```

### 4.JavaScript注释

- 注释即对代码的备注，是程序员能够看懂的，对代码的解释说明。
- 注释是写给程序员看的。

- 单行注释

```html
<body>
  <script>
    // 这是注释内容
    alert("在这里写弹出的内容")
  </script>
</body>
```

- 多行注释

```html
<script>
    /*这是注释内容
    很多注释
    很多...*/
    alert("在这里写弹出的内容")
  </script>
```

### 5.JavaScript变量

变量：用来存储数据的容器

js 变量与代数类似，例如：

x=5

y=6

z=x+y

在代数中，我们使用字母（如 x），并给它赋值（如 5）。从上面的表达式 z=x+y ，我们可以计算出 z 的值为 11。在 JavaScript 中，这些字母被称为**变量**。变量可以是很短的名称（如 x 和 y）或者更具描述性的名称（如 age、userName、passWord）。

#### JavaScript变量命名规则

- **字符范围**：
  - 首字符必须是 **字母（A-Z/a-z）**、**下划线（`_`）** 或 **美元符号（`$`）**
  - 后续字符可以是字母、数字（0-9）、`_` 或 `$`
  - ❌ 错误示例：`1name`、`@var`、`user-name`
- **区分大小写**：
  - `myVar` 和 `myvar` 是两个不同的变量
- **不能是保留字**：
  - 禁止使用 `let`、`class`、`return` 等 JavaScript 关键字
  - ❌ 错误示例：`let = 10`、`function = "test"`

```properties
// ✅ 合法命名
let age = 25;
let _privateVar = "secret";
let $element = document.getElementById("box");

// ❌ 非法命名
let 123abc = 10;     // 数字开头
let user-name = "Tom"; // 连字符非法
let class = "text";   // 保留字
```

> JavaScript不需要指定变量的类型，JavaScript的变量类型由他的值来决定。

- 变量声明

```html
//  声明变量
   let 小黄;
```

- 变量赋值

```html
<script>
  //  声明变量
   let 小黄;
  //  变量赋值
  小黄 = "我家的一只小狗"
  </script>
```

- 变量声明并赋值

```html
<body>
  <script>
    let a = "我家的一条小狗"
    console.log(a);
  </script>
</body>
```

### 6.JavaScript的数据类型

#### 6.1基本数据类型

- 字符串型 (String)
- 数值型 (Number)
- 布尔 (Boolean)
- undefined (Undefined)
- null (Null)

##### 6.1.1String 字符串

**什么是字符串？**

**在编程中用引号包裹起来的一串字符是字符串数据。**

一个字符串是一串字符数据，就像 "Hello world!123"，就像 " **你好世界** "，都是字符串 。

String用于表示一个字符序列，即字符串。字符串需要使用 **单引号** 或 **双引号** 包裹起来。

```html
<script>
    let a = "这是字符串a"
    let b = '这是字符串b'
</script>
```

##### 6.1.2Number 数值型

Number 类型用来表示整数和浮点数，最常用的功能就是用来表示10进制的整数和浮点数。

什么是整数：是一个没有小数的数字。

**整数有什么规则？**

- 整数必须至少有一个数字 (0-9)
- 整数不能包含逗号或空格
- 整数是没有小数点的  
- 整数可以是正数或负数  

什么是浮点数：是带小数部分的数字。

```html
<script>
    // 整数
    let a = 10
    // 浮点数
    let b = 10.01
</script>
```

##### 6.1.3Boolean 布尔型

布尔类型非常特殊，其只有两个数据，分别是 TRUE （1） 和 FALSE （0）。

**布尔类型用于？**

布尔型通常用于条件判断。在接下来的学习中你会学到更多关于条件控制的知识。

```html
<script>
    // true  真
    let a = true
    // false 假
    let b = false
</script>
```

##### 6.1.4Undefined

在使用 let 声明变量但未对其加以初始化时，这个变量的值就是 undefined。

```html
<script>
    // 变量声明 没有赋值 就会打印undefined
    let a;
    console.log(a);
</script>
```

##### 6.1.5Null

空，表示空对象，一般用来初始化变量

```html
<script>
    // 当变量需要为空的时候 就可以写null
    let a = null
    let b = null
</script>
```

#### 6.2引用数据类型

##### 6.2.1.数组 (Array)是一组按顺序排列的数据的集合，数组中的每个值都称为元素，而且数组中可以包含任意类型的数据。在 JavaScript 中定义数组需要使用方括号 [ ] ，数组中的每个元素使用逗号进行分隔

**数组有什么用？**

数组可以在一个变量中存储多个值。

**如何访问索引数组中的值？**

数组中的每个值，电脑都会给其标序号，序号从0开始，这个序号我们称为索引。程序员通常通过下标访问数组的每个值。

索引取值语法：**数组名[索引]**



```javascript
let arr = [1, 2, 3, 4]
```

**通过索引取值**

```javascript
// 引用数据类型
// 1.数组 []表示
// 我们可以通过索引取值
let arr = [1,2,3,4,5,6]
console.log(arr[0]);

```

**获取数组的长度**

```javascript
let arr = [1, 2, 3, 4, 5, 6]
console.log(arr.length);
```



##### 6.2.2 对象 （Object）在 JavaScript 中，对象是一种复合数据类型，用于存储键值对。对象可以包含各种类型的数据

```javascript
<script>
    let b = {
      name: "景明",
      age: 18,
      sex: "男",
      
    }
    // 对象取值  需要通过.来取值
    console.log(b);
    console.log(b.name);
    console.log(b.age);
	b.city = "北京"; // 新增属性
	delete b.age;   // 删除属性

</script>
```

#### 6.3typeof 判断类型

场景：基本数据类型的判断

```html
<script>
    let a = '我是字符串类型'
    let b = 10
    let c = undefined
    let d = null
    let e = true
    
    console.log(typeof a); // string
    console.log(typeof b); // number
    console.log(typeof c); // undefined
    console.log(typeof d); // 如果值是null 打印会为object类型
    console.log(typeof e); // boolean
</script>
```

### 7.运算符

#### 7.1字符串拼接

字符串拼接使用"+"运算符

```javascript
<script>
    let a = 33
    let b = 40
    // 
    console.log(a + b);
    let c = "33"
    let d = 44
    // 字符串和数字进行拼接，自动把数字类型转换成字符串
    console.log(c+d);
</script>
```

特点：数字和字符串拼接会自动进行类型转换。

#### 7.2算数运算符

用于表达式计算。

| 符号 | 作用 |
| ---- | ---- |
| +    | 相加 |
| -    | 相减 |
| *    | 相乘 |
| /    | 相除 |
| ++   | 自增 |
| --   | 自减 |



1. 加 +
2. 减 +
3. 乘 *
4. 除 /
5. 自增 ++
6. 自减 --

示例代码：

```html
<script>
    let a = 10
    let b = 20
    console.log(a+b); // 30
    console.log(a-b); //-10
    console.log(a*b); //200
    console.log(a/b); //0.5
    console.log(++a); //11
    console.log(--b); //19
</script>
```

#### 7.3赋值运算符

赋值运算符用于给 JavaScript 变量赋值。

| 符号 | 作用                    |
| ---- | ----------------------- |
| =    | 赋值                    |
| +=   | 例如a+=b，为a=a+b的简写 |
| -=   | 例如a-=b，为a=a-b的简写 |



1. =
2. +=
3. -=

示例代码

```html
<script>
    let a = 10
    let b = 20
    // console.log(a=100); //结果 100
    // console.log(a+=b); // a=a+b 结果 30
    console.log(a-=b); // a=a-b 结果 -10
</script>
```

#### 7.4比较运算符

| 符号 | 作用                                                         |
| ---- | ------------------------------------------------------------ |
| ==   | 判断两边的值是否相等 如果相等返回true，否则返回false 只要值相等就相等 |
| !=   | 用来判断两个值是否不相等 如果不相等返回true，否则返回false   |
| ===  | 判断两边的值 和数据类型是否相等                              |

 **==** 判断两边的值是否相等 如果相等返回true，否则返回false 只要值相等就相等

```html
<script>
    let a = 30
    let b = "30"
    console.log(a==b); //值相等就会相等  true
</script>
```

!= 用来判断两个值是否不相等 如果不相等返回true，否则返回false

```html
<script>
    let a = 30
    let b = "30"
    console.log(a!=b); //值相等就会相等  false
</script>
```

 === 判断两边的值 和数据类型是否相等

```html
<script>
    let a = 30
    let b = "30"
    console.log(a===b); //值和类型都相等就会相等  false
</script>
```
