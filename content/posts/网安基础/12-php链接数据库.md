[TOC]



## **七、面向对象**

面向对象（Object-Oriented，简称 OO）是一种编程思想和方法，面向对象编程，就是使用对象进行编程。即，设计类，基于类创建对象，并使用对象完成具体的工作。

面向对象编程强调数据的封装、继承、多态和动态绑定等特性，使得程序具有更好的可扩展性、可维护性和可重用性。

**面向对象编程的三个主要特性：**

- 封装（Encapsulation）：指将对象的属性和方法封装在一起，使得外部无法直接访问和修改对象的内部状态。通过使用访问控制修饰符（public、private、protected）来限制属性和方法的访问权限，从而实现封装。
- 继承（Inheritance）：指可以创建一个新的类，该类继承了父类的属性和方法，并且可以添加自己的属性和方法。通过继承，可以避免重复编写相似的代码，并且可以实现代码的重用。
- 多态（Polymorphism）：指可以使用一个父类类型的变量来引用不同子类类型的对象，从而实现对不同对象的统一操作。多态可以使得代码更加灵活，具有更好的可扩展性和可维护性。在 PHP 中，多态可以通过实现接口（interface）和使用抽象类（abstract class）来实现。

### **什么是类？**

具有相同属性和行为的事务的一个划分，可以称为一个类。比如：人类、手机类、闹钟类、动物类...

![img](https://gitee.com/lao-jiang-next-door/images/raw/master/17121)

![img](https://gitee.com/lao-jiang-next-door/images/raw/master/17122)

 

### **什么是对象？**

比如 Animal(动物) 是一个**类**，而动物可以具体到一只狗跟一只羊，而狗跟羊就是具体的对象，他们有颜色、体积等属性，可以进行吃饭、跑步、睡觉等行为状态。

![img](https://gitee.com/lao-jiang-next-door/images/raw/master/17123)

### **面向对象专业名词**

- **类** − 定义了一件事物的抽象特点。类的定义包含了数据的形式以及对数据的操作。
- **对象** − 是类的实例。
- **成员变量**  − 定义在类内部的变量。该变量的值对外是不可见的，但是可以通过成员函数访问，在类被实例化为对象后，该变量即可成为对象的属性。
- **成员函数** − 定义在类的内部，可用于访问对象的数据。
- **继承** − 继承性是子类自动共享父类数据结构和方法的机制，这是类之间的一种关系。在定义和实现一个类的时候，可以在一个已经存在的类的基础之上来进行，把这个已经存在的类所定义的内容作为自己的内容，并加入若干新的内容。
- **父类** − 一个类被其他类继承，可将该类称为父类，或基类，或超类。
- **子类** − 一个类继承其他类称为子类，也可称为派生类。
- **多态** − 多态性是指相同的函数或方法可作用于多种类型的对象上并获得不同的结果。不同的对象，收到同一消息可以产生不同的结果，这种现象称为多态性。
- **重载**  − 简单说，就是函数或者方法有同样的名称，但是参数列表不相同的情形，这样的同名不同参数的函数或者方法之间，互相称之为重载函数或者方法。
- **抽象性** − 抽象性是指将具有一致的数据结构（属性）和行为（操作）的对象抽象成类。一个类就是这样一种抽象，它反映了与应用有关的重要性质，而忽略其他一些无关内容。任何类的划分都是主观的，但必须与具体的应用有关。
- **封装** − 封装是指将现实世界中存在的某个客体的属性与行为绑定在一起，并放置在一个逻辑单元内。
- **构造函数** − 主要用来在创建对象时初始化对象， 即为对象成员变量赋初始值，总与new运算符一起使用在创建对象的语句中。
- **析构函数** − 析构函数(destructor) 与构造函数相反，当对象结束其生命周期时（例如对象所在的函数已调用完毕），系统自动执行析构函数。析构函数往往用来做"清理善后" 的工作（例如在建立对象时用new开辟了一片内存空间，应在退出前在析构函数中用delete释放）。

 

### **PHP 类定义**

PHP 定义类通常语法格式如下：

> class  类名{
>
> ​	**// 类的属性（也称为成员变量）**  
>
> ​	**// 类的构造方法在创建对象时自动调用，用于初始化对象的属性**  
>
> ​	**// 类的方法（也称为成员函数）**
>
> }

![img](https://gitee.com/lao-jiang-next-door/images/raw/master/17124)



```php
<?php
// 面向对象 是一个编程套路
// 它相当于一个模板  或者是 思维图   草稿
// 画出来之后 才可以根据画的样子 来做房间的设计

// 草稿在面向对象编程里面有一个专业术语  类    class
//我们一起来造车  两个部分  车的特征  车的功能
//车的特征：颜色  品牌  型号   属性--->本质上是变量
//车的功能：开动  停止  方法---->本质上是函数

// 定义一个名为 Car的类--->只是一个草稿
class Car{
//     类里面的属性 前面要加上 public
    public $color; // 汽车的颜色
    public $make; // 品牌
    public $model; // 型号
    // 方法  就是函数  前面也要加上 public
    public function kaidong(){
        echo "我的功能是开动！";
    }
    public function tingzhi(){
        echo "我的功能是停止！";
    }
}


?>

```

**下图中我们通过 Car 类 创建了三个对象：Mercedes, Bmw, 和 Audi。再调用一下各个汽车对象的方法。**

```php
// 现在的车还不能够开动 因为此时 车还没有造出来
//kaidong()
//所以需要造车  创建对象  把车造出来
// 必须  new 关键字来造车  new 类名() 就可以造出一个车对象出来
$benchi = new Car();  // $benchi 对象名
var_dump($benchi);
// 可以为车的颜色 品牌 型号来赋值了  对象名->属性 = 值
$benchi->color = "红色";
$benchi->make = "奔驰";
$benchi->model = "E300";
// 可以开动了   调用方法   对象名->方法名()；
$benchi->kaidong();
$benchi->tingzhi();
$benchi->msg();
```

 



## **使用 MySQLi 扩展**

MySQLi 是 “MySQL Improved Extension” 的缩写，它是 PHP 用于与 MySQL 数据库进行交互的扩展。

### **1. 连接数据库**

```php
<?php
    // 定义数据库服务器的地址，通常 localhost 表示本地服务器
    $servername = "localhost";
    // 数据库用户名，这里使用的是 root 用户，实际中应避免使用 root 作为普通数据库用户，出于安全考虑
    $username = "root";
    // 数据库用户的密码，这里需要替换为你自己的数据库密码
    $password = "root";
    // 要连接的数据库的名称，这里需要替换为你自己的数据库名称
    $dbname = "day09";
    
    // 使用 mysqli 类创建一个数据库连接对象，传递服务器地址、用户名、密码和数据库名称作为参数
    $conn = new mysqli($servername, $username, $password, $dbname);
    // 检查连接是否成功
    if ($conn->connect_error) {
    //    echo "链接失败！";
        // 如果连接出现错误，使用 die() 函数终止脚本的执行，并输出连接失败的信息及具体错误信息
        die("连接失败: ". $conn->connect_error);
    }else{
        echo "链接成功！";
    }
    //echo "111";
?>
```

### **2. 插入数据（增操作）**

create table students(id int primary key auto_increment,name varchar(50),age int);

假设存在名为 students 的表，有 id（自增主键）、name、age 等字段，以下是插入一条学生记录的示例代码：

```php
$name = "John";
$age = 20;
$sql = "INSERT INTO students (name, age) VALUES ('$name', $age)";
 
// query() 是 mysqli 对象的一个方法，用于执行一个 SQL 语句。 
// 使用语法： 数据库链接名.query(SQL 语句)
if ($conn->query($sql) === TRUE) {
    // 如果 $conn->query($sql) 的执行结果严格等于 TRUE，表示 SQL 语句执行成功
    echo "新记录插入成功";
} else {
    // 如果 $conn->query($sql) 的执行结果不等于 TRUE，表示 SQL 语句执行失败
    echo "插入数据出错: ". $conn->error;
    // $conn->error 存储了执行 SQL 语句时发生错误的具体信息，将其输出以帮助排查问题
}
```

### **3. 查询数据（查操作）**

从 students 表中查询所有学生记录的示例代码如下： 

```php
// 定义一个 SQL 查询语句，用于从 students 表中选择所有行
$sql = "SELECT * FROM students";
// 使用 $conn 对象的 query 方法执行 SQL 查询语句，并将结果存储在 $result 变量中
$result = $conn->query($sql);
 
// 检查 $result 结果集的 num_rows 属性，该属性表示结果集中的行数。检查查询结果的行数是否大于 0
if ($result->num_rows > 0) {
    // 使用 fetch_all 方法将结果集转换为一个二维数组，其中每个元素是一个关联数组，代表一行数据
    $rows = $result->fetch_all(MYSQLI_ASSOC);
    // 使用 foreach 循环遍历二维数组
    foreach ($rows as $row) {
        // 输出每一行的信息，包括 id、name 和 age 列的值
        echo "ID: ". $row["id"]. " - Name: ". $row["name"]. " - Age: ". $row["age"]. "<br>";
    }
} else {
    // 如果查询结果行数为 0，说明没有查询到学生记录，输出相应的信息
    echo "没有查询到学生记录";
}
```

### **4. 更新数据（改操作）**

将名为 John 的学生年龄更新为 21 的示例代码：

```php
$new_age = 21;
$name = "John";
$sql = "UPDATE students SET age = $new_age WHERE name = '$name'";
if ($conn->query($sql) === TRUE) {
    echo "记录更新成功";
} else {
    echo "更新数据出错: ". $conn->error;
}
```

### **5. 删除数据（删操作）**

删除名为 John 的学生记录的示例代码：

```php
$name = "John";
$sql = "DELETE FROM students WHERE name = '$name'";
if ($conn->query($sql) === TRUE) {
    echo "记录删除成功";
} else {
    echo "删除数据出错: ". $conn->error;
}
```

### **6. 关闭连接**

```php
$conn->close();
```

 

## **HTML、CSS与PHP应用 -get拓展**



### **get请求特点：**请求参数是能够在网页地址栏看到的。

```php
<!DOCTYPE html>
<html>
    <head>
        <title>html与php结合</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                text-align: center;
            }
            h1 { color: #333; }
            p { color: #666; }
            /*定义了文本输入框的样式，包括内边距、外边距、边框和边框圆角*/
            input[type="text"] {
                padding: 8px;
                margin: 10px;
                border: 1px solid #ccc;
                border-radius: 4px;
            }
            /*定义了提交按钮的样式，包括内边距、背景颜色、文本颜色、边框和鼠标悬停效果。*/
            input[type="submit"] {
                padding: 10px 20px;
                background-color: #007BFF;
                color: white;
                border: none;
                border-radius: 4px;
                cursor: pointer;
            }
            input[type="submit"]:hover {
                background-color: #0056b3;
            }
        </style>
    </head>
    <body>
    <h1>欢迎浏览我们的网站</h1>
        <?php
            /* 检查是否有 GET 参数传递过来。【检查是否存在名为 “信息” 的元素】
             * isset($_GET['message']) 用于检查 $_GET 关联数组中是否存在键为 message 的元素，并且该元素不为 NULL
             * 如果存在，将其存储在 $信息 变量中，然后将其显示在 <p> 标签中。
             * 如果不存在，会显示一个提示信息，让用户输入信息。
             */
            if (isset($_GET['message'])) {
                $message = $_GET['message'];
                echo "<p>". $message. "</p>";
            } else {
                echo "<p>请在下方输入信息后进行提交：</p>";
            }
        ?>
    <!-- form元素创建一个表单，用户可以在其中输入信息,并指定以何种方式提交
            - action 属性指定了表单数据提交后，服务器端处理该数据的脚本或页面的 URL,
                -- $_SERVER 是一个超全局变量，它包含了服务器和执行环境的信息。
                -- PHP_SELF 是 $_SERVER 数组中的一个元素，它存储着当前正在执行的脚本的文件名（相对于网站的根目录）。
                -- echo $_SERVER['PHP_SELF']; 会输出当前 PHP 脚本的文件路径。
            - method指定提交方法,这里指定GET方法提交表单数据，当用户点击提交按钮时，输入的数据将附加在 URL 后面
    -->
    <form action="<?php echo $_SERVER['PHP_SELF'];?>" method="get">
        <input type="text" name="message" placeholder="在这里输入您的信息">
        <input type="submit" value="Submit">
    </form>
    </body>
</html>
```

 

## **HTML、CSS与PHP应用  - post拓展**

### **post请求特点：**请求参数不能够在网页地址栏看到。

```php
<!DOCTYPE html>
<html>
    <head>
        <title>用户注册</title>
    </head>
    <body>
        <h2>用户注册</h2>
        <?php
            // 检查是否有表单提交
            if ($_SERVER['REQUEST_METHOD'] == 'POST') {
                // 获取用户通过表单提交的用户名、密码
                $user_name = $_POST['username'];
                $user_password = $_POST['password'];
                echo "<p>". $user_name.$user_password. "</p>";
            } else {
                echo "<p>请在下方输入信息后进行提交：</p>";
            }
        ?>
        <form action="<?php echo $_SERVER['PHP_SELF'];?>" method="post">
            <span>用户名:</span>
            <input type="text" id="username" name="username"><br><br>
            <span>密码:</span>
            <input type="password" id="password" name="password"><br><br>
            <input type="submit" value="注册">
        </form>
    </body>
</html>
```

 