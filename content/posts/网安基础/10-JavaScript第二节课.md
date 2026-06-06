[TOC]



## JavaScript第二节课

### 1.条件判断

#### 1.1条件语句的介绍

条件语句就是通过条件来控制程序的走向。

#### 1.2if判断

> 1、if语句-只有当指定条件为true时，使用该语句来执行代码
>
> 2、if...else语句-当条件为true时执行代码，当条件为false时执行其他代码
>
> 3、if...else...if....else语句：使用该语句来判断多条件，执行条件成立的语句

```js
if(判断条件){
	执行语句
}else{
	执行语句
}
```

```javascript
    <script>
        let a = 5
        let b = "5"
        // 判断a == b
        // if (判断条件){}
        // if (a == b){
        //     // 如果条件成立则执行以下代码
        //     console.log("条件成立");
        // }else{
        //     // 否则则执行一下代码
        //     console.log("条件不成立");
        // }
        // 多条件判断
        // 在js里面如果数字和字符串进行比较，会自动把字符串转成数字类型然后进行比较
        if (a < b) {
            console.log("a确实小于b");
        } else if (a == b) {
            console.log("a确实等于b");
        } else {
            console.log("a大于b");
        }
    </script>
```

### 逻辑运算符

| 逻辑运算符 | 描述 |
| ---------- | ---- |
| &&         | 并且 |
| \|\|       | 或者 |

```javascript
    <script>
        let a = 1
        let b = 2
        // &&左右两边条件都为真 才为真 只要有一个条件为假 那么就为假
        // if (a >0 && b>0 ){
        //     console.log("我是成立的");
        // }else{
        //     console.log("条件不成立");
        // }
        // ||左右两边只有有一个条件为真 那就为真
        // ! 表示对结果进行取反=、
        if ( a >0 || b>10 ){
            console.log("我是成立的");
        }else{
            console.log("条件不成立");
        }
    </script>
```

### 2.循环

循环就是重复做一件事，在编写代码的过程中，我们经常会遇到一些需要反复执行的操作，例如遍历一些数据、重复输出某个字符串等，如果一行行的写那就太麻烦了，对于这种重复的操作，我们应该选择使用循环来完成。

#### 2.1for循环

普通for循环

```
for (语句1;语句2;语句3) {
      被执行的代码块
    }
```

```js
for (let i = 0; i < 5; i++) {
      console.log(i);
    }
```



根据可迭代对象循环(如 数组、字符串)

```
for (let 变量名 of 对象){
	被执行的代码块
}
```

```js
  <script>
    // 除了写法的区别 逻辑都是一样的
    let arr = [1,2,3,4,5,6]//数组名字叫arr
    //for来遍历 关键词后面总会接上一个括号 都是来写逻辑
    for(let item of arr){
      // 只需要打印item就可以获取对象arr的值
      console.log(item);
    }
  </script>
```

根据object对象循环

```
for (let 变量名 in 对象){
            
}
```

```javascript
    <script>
        let a = {
            name:"景明",
            age:18,
        }
        // 使用for...in...遍历对象
        for (let i in a){
            console.log(i);
            // console.log(a.i);
            // 它会默认从对象a里面找i键值对
            // 注意 如果要拿对象里面的值必须使用 对象[] 记住就行
            console.log(a[i]);
        }
    </script>
```



#### 2.2while循环

适合根据条件循环

- 条件成立无限循环
- 条件不成立停止循环

```js
while(条件){
	执行代码
}
```

```js
let a = 10
while(a == 10){
	console.log('因为a等于10 满足条件 代码一直执行');
}
```

结束死循环

```javascript
    <script>
        let a = 0
        // 是在网页中写while会占用浏览器内存 无限循环 导致浏览器卡死
        while (a < 10) {//判断a==10
            console.log("无限循环")
            // 我们也可通过条件来终止循环 
            a++  //a++ 每次循环 a都会加1 累加
        }
    </script>
```

break与continue

break：结束整个循环
continue：结束当前循环，进入下一轮循环

for循环和while循环同等作用

```javascript
// break
		let a = [1,2,3,4]
        for (let i of a){
            // 当i为3时
            if (i==3){
                // break退出整个循环
                break
            }
            console.log(i);
        }
// continue
		let a = [1,2,3,4]
        for (let i of a){
            // 当i为3时
            if (i==3){
                // break退出整个循环
                continue
            }
            console.log(i);
        }
```

### 3.函数function

函数是一组执行特定任务（具有特定功能）的，可以重复使用的代码块

#### 3.1定义函数

```js
<script>
    // 函数
    //普通函数
    // 创建一个函数叫a
    function a() {
      console.log("我是函数a");
    }
    
  </script>
```

#### 3.2调用函数

```js
// 调用函数
a()
```

#### 3.3形参和实参

 

#### 3.4return

返回函数内部的值



