# JavaScript
---

## JS基础语法

+ JavaScript的组成

  + ECMAScript 3 4 5 6 7
  + DOM 文档
  + BOM 浏览器

+ 所有的JS文件都写在 **HTML文件里面的**\<script>标签里面

  + 默认有 type属性 type = 'text/javascript' 可不写
  + src = 'demo.js' 用这个来引用外部js文件
  + 如果你是js文件的话就不用在 js文件里写script标签了

+ 可以使用多个script标签， 多个script标签时，自上而下依次执行。

+ 一个script标签，要么执行script标签内部的，要么执行src外部引入的，不能同时都执行。

  ----

  

+ 向页面输出内容的三种方式：

  + alert('  ') 在当前页面弹出一个警告框
  + document.write() 在当前页面上输出内容
    + 可以在里面直接写 html语法的tag标签，自动编译
    + 如果要出现\< \> 这些符号，请用 \&lt; \&gt;来转译
  + console.log() 在后台控制台显示内容，一般用来调试代码

  ---

  

+ JavaScript的注释

  + 单行注释
    +  //
  + 多行注释
    + /*                    */

+ :star::star::star:

  + 特别注意：
  + 在写js代码的时候，每行结束位置都要写  ;  分号。
  + 代码压缩：因为在做代码压缩的时候会去掉空格 tab 和换行，不写分号，可能会出错。



---

## JS常量和变量

+ 常量，值不可以改变的叫做常量

+ 常量的数据类型

  + 基本数据类型

    + 数字

      > ​	类型：number
      >
      > ​    例子：100 -20 3.14

    + 布尔值

      > ​	类型 ： boolean
      >
      > ​	例子： true false

    + 字符串

      > ​	类型：所有带有单引号或者双引号的都叫做字符串，但是单引号和双引号必须成对出现

  + 复合/引用数据类型

  + 特殊数据类型

    + null 空
    + undefined 未定义 一种状态。在申明的变量没有初始化（意思就是没有赋值）
    + NaN not a number

+ ---

+ 变量

+ 声明变量（必须声明以后才可使用）

  ```js
  var number = 10 ;
  ```

+ 初始化

  + 声明变量的时候给一个赋值

+ 如果没有初始化，那就是显示 undefined

+ :star:如果暂时不知道初始化的值，就设置成null，undefined太占内存，效率不高。



----

## JS变量命名

+ 标识符： 所有用户自定义的名字叫做标识符

+ 所以 变量命名也是标识符

+ 命名规则：

  + 只能用数字、下划线、字母和$符号组成

  +  不能以数字开头

  + 不能是保留字和关键字

  + 区分大小写  var  Search 和 var search是两个不同的变量

  + 见名知意

  + 对于单词个数超过2个的

    + 驼峰式命名

      > ​	var className

    + 下划线

      > ​	var class_name

+ 在JS中，变量属于弱引用。

  + 赋值成什么数据类型就是数据类型

  + var num =10；

    num =' hello '‘；

    可以直接改变其 数据类型。

  + 但是不建议改变当前变量的数据类型，容易引起歧义。 var num 如果等于’hello'

+ 关键字：

  + typeof

  + 格式 typeof 常量/变量

  + 功能：输出当前量的数据类型

    > ​	alert( typeof 100); ---显示number
    >
    > ​	alert(typeof typeof 100); ---显示string

----

## JS运算符

+ 算术运算符

  > 	+ \+
  > 	+ \- 
  > 	+ \* 
  > 	+ \ 
  > 	+ /
  > 	+  %(取余)
  >  + 自动数据类型转换( 加号➕）：
  >    	+ 纯数字 直接算
  >    	+ 数字 + true/ false  /null 转换成 1/ 0 / 空  算
  >    	+ 数字+ NaN / undefined = NaN
  >    	+ string 和 +号 ：字符串拼接。连 NaN也可以拼。'haha'+NaN= 'hahaNaN'
  > + 自动数据类型转换( 非 加号）：
  >   + 纯数字，直接算
  >   + 数字和string，如果string是数字，可以当做数字算
  >   + 数字和string，但是string不是数字，等于  NaN
  >
  > ```js
  > alert(100 + 10);
  > // 110
  > alert(100 + '10' + NaN);
  > // 10010NaN
  > alert(100 - 10);
  > // 90
  > alert(100 - '20');
  > // 80
  > alert(null + 'sb');
  > //nullsb
  > alert(1 + 1);
  > // 2
  > alert('1' + 2);
  > //12
  > alert('1'+ '3');
  > //13
  > alert(1 + 'wori');
  > //1wori
  > alert(1 + NaN);
  > //NaN
  > alert('100' - 20);
  > //80
  > alert('100' - '30');
  > //70
  > alert(100 - 'a')
  > //NaN
  > alert( 100 - '100aa')
  > //NaN
  > alert(NaN + 'wori')
  > //NaNwori
  > alert(1 + null);
  > //1
  > alert(1 + undefined);
  > //NaN
  > alert(1 + true);
  > //2
  > alert(1 + false);
  > //1
  > 
  > ///说白了一句话，就下面2个点。
  > /// +号(表达式里只有+号) 和 string（只要出现哪怕一个） 同时存在时候，触发 拼接特效，会把 ➕号左右的东西全都拼起来
  > ///别的时候，看看能不能转成全部都是数字，如果不行，一定是 NaN
  > 
  > ```
  >
  > ---
  >
  > ---
  >
  > ---
  >
  > ```js
  > // 1. 小数计算误差， alert(0.8 - 0.2) 算出来显示的不是0.6 ，而是0.600000001
  > 
  > //	2.	在JS中，可以 除以0.
  > alert(3 / 0); alert( -3 / 0);
  > //结果是  infinity 和 -infinity;
  > //这个infinity 是一个number类型的数字，也就意味着 它遵循： 
  > // 遇到+号 string变拼接
  > //以及 全部都是数字的情况下，可以相加减的 规则。
  > ```
  >
  > 

  ​	



+ 关系运算符

  > ​	<	 > 
  >
  > ​	\>= 	<= 
  >
  > ​	==
  >
  > ​	 !=    
  >
  > ​	=== 
  >
  > ​	 !==

+ 逻辑运算符

  > ​	&& 
  >
  > ​	|| 
  >
  > ​	!

+ 一元运算符

  > ​	++
  >
  > ```js
  > //功能： 对原有的变量进行+1操作。
  > // a++
  > 
  > var a =5 ;
  > a++;
  > // 等价于  a =a +1;
  > //也等价于 a += 1;
  > alert(a++);
  > //  5  a++,加号后置，先取a的值，再+1;所以 此时a++ 是5；
  > alert(a);
  > //  6
  > 
  > var a =5 ;
  > ++a;
  > // 等价于 a = a+1;
  > //也等价于 a += 1;
  > alert(++a);
  > // 6 ++a，加号前置，a先加一操作，再取a的值，所以此时a++已经加了1了，是6.
  > alert(a);
  > //  6
  > 
  > 
  > 
  > var a =10 ;
  > alert(a++ + ++a +a + ++a + a++ +a);
  > // 74
  > //说到底一句话, 一旦使用了a++,或者 ++a, a的值一定会＋1.
  > //区别就是 如果 打印a++.++a
  > //两者结果是不同的，a++是没加一的时候a的值， ++a，是加了一以后a的值
  > ```
  >
  > 
  >
  > ​	--

  > ```js
  > parseInt(  )；
  > //取整函数
  > ```
  >
  > 

+ 赋值运算符

  + 基本赋值运算符

    > ​	=
    >
    > 功能：  左边 变量  =  右边 要赋的值
    >
    > 所以，过程是， 先计算等号右边的 表达式的值， 再去赋给左边的变量。
    >
    > ```js
    > var num =30 + 10;
    > //变量初始化，就写个var.
    > num = num +40 ;
    > alert(num);
    > //显示num为80;
    > ```
    >
    > 

  + 复合赋值运算符

    > ​	+=
    >
    > ```js
    > num += 5;
    > 
    > num = num + 5;
    > ```
    >
    > 
    >
    >   -=
    >
    > ```js
    > num -= 1;
    > 
    > num = num - 1;
    > ```

    也就是说： 

    > ```js
    > var num = 30;
    > //  初始化一个叫num的变量，并且赋值30.
    > 
    > num += 5;
    > //  等价于  num = num+5. 先看右边表达式，表达式里，num是上面初始化的num，也就是30.所以右面表达式等于35. 所以式子变成 num = 35；
    > 
    > alert(num);
    > //alert出来是 35；
    > ```
    >
    > 

+ 表达式： 任何数据和运算符组成的式子叫做表达式。

  + 分析表达式时，表达式一定有值
  + 分析表达式时，表达式一定有功能

----

## 强制数据类型转换

+ Number () 其他数据类型强制转换成数字值。

  ```js
  Number(100);
  //100
  Number('100');
  //100
  Number('100asasasa');
  //NaN
  ```

  

+ Boolean() 其他数据类型强制转换成布尔值。

  > ```js
  > Boolean(-100); 
  > //true
  > Boolean(100);
  > //true
  > Boolean(0);
  > //false
  > // 只有0是false。
  > Boolean(infitnity);
  > //true
  > Boolean('infitnity');
  > //true
  > Boolean(' ');
  > // false
  > //只有空字符是 false;
  > Boolean(null);
  > //false
  > Boolean(NaN);
  > //false
  > Boolean(undefined);
  > //false
  > ```
  >
  > 

+ parseInt()

  ```js
  parseInt(100);
  //100
  parseInt('100.1');
  //100
  parseInt('100aaa');
  //100
  parseInt('10b0aaa');
  //10
  parseInt('c10b0aaa');
  //NaN
  
  // 还可以用来 十进制转换
  
  
  parseInt('string1' , 2);
  //string1 是 二进制，转换为10进制。
  parseInt('string2' , 8);
  //string2 是 二进制，转换为8进制。
  
  //注意，此时 第一个参数必须是 字符串类型的哦~
  ```

  

+ parseFloat()

```js
parseFloat('3.14a');
//3.14
```

----

---

## 关系运算符

+  一个等于号， 是用来赋值的。不是关系运算符，别搞错了。

+ 两个等于 或者 三个等于，才是用来判断的。

+ **最后运算的值 绝对是 布尔值。**

+ 不同数据类型之间的 关系运算符比较。

  > ​	自动数据类型转换：
  >
  > ```js
  > var result=( 1 > 5);
  > //直接比较。 --> false; 
  > var result=( 'A' < 'a');
  > //比较 ASCII码值 -->true;
  > var result=( 'worinima' < 'worinidie');
  > //逐位比较 ASCII码值 -->如果比较出大小，就直接得结果。和长度无关。
  > var result=( true == 1);
  > var result=( '10' == 10);
  > // true.
  > //如果有一个数值，一定把所有都转换成数值。
  > 
  > var result=(10 == ’19a');
  > // false
  > // 不是纯数字的字符串 转成数值反正是NaN；
  > //任何数字 和 NaN 做 ==  一定是 false，
  > //任何数字 和 NaN 做 ！=  一定是 true
  > //任何数字 包括他自己NaN，
  > 
  > 
  > 
  > 
  > //说白了一句话。做关系运算符的时候，
  > // 1.首先，结果肯定要么 true 要么false，他是一个值。 var a = 1 和var a( 1 == true)是一样的。
  > // 如果 两边都是非纯数字，那就比较ASCII码
  > // 如果 两边有一边是纯数字(包括 带字符串的纯数字，例如 '189'这样的，那就两边都转换成数值来比较，如果无法转化，比如'abcd'那就转化成NaN，和NaN比较。
  > // 因此， NaN ==  NaN 会判断成 False
  >             
  >   
  > 
  > ```
  >
  > ```js
  > 因此要注意一些特殊情况：
  > null == undefined ---> true;
  > 'NaN' == NaN --->false;
  > NaN == NaN ---> false;
  > undefined == 0; --->false;
  > null == 0; ---> false;
  > '100' == 100 ---> true;
  > '100' === 100  ---> false;
  > true == 2 ---> false;
  > true == 1---> true;
  > false == 0 ---> true;
  > NaN属于一种混沌状态不确定值的 number类型。
  > 
  > 
  > Number(null) ---> 0 ;
  > Number(undefined) --->NaN;
  > null == undefined ---> true;
  > ```
  >
  > 

----

## 逻辑运算符

+ 注意，这和 数学运算符、关系运算符不一样。它是 表达式之间的 运算符。用在表达式1 表达式2之间。

+ &&

  > ​	exp1 && exp2 ;
  >
  > exp 1 exp2 都为真， 这个&&式子才成立。

+ ||

  > ​	exp1 || exp2 ;
  >
  > exp 1 exp2 都为假， 这个&&式子就才为假，也就是只要一个是真，就是真。

+ ！ 

  > ​	!表达式 
  >
  >  !exp ;
  >
  > 先将exp转化成布尔值， 再取反。
  >
  > ```js
  > alert(! '');
  > // true
  > alert(!'ss');
  > //false
  > alert(!0);
  > //true;
  > alert(!10);
  > //false;
  > alert(!NaN);
  > //true;
  > alert(!null);
  > //true;
  > alert(!undefined);
  > //true;
  > alert(!Infinity);
  > //false;
  > 
  > 
  > alert(!'0');
  > //false;
  > 
  > alert(Boolean('0'));
  > //true;
  > 
  > //总之一句话：   先转化成布尔值 再取！
  > //  NaN， null ， undefined , 0 他们取布尔值 都是 0，也就是 false；
  > // 但是 ’0’ 取boolean（），不是0，是1.
  > ```
  >
  > 

+  注意 短路操作：在 &&中，如果 exp1已经判为false了，那后面不管咋样都是无所谓了，直接出false结果。同理在 ||中，如果 exp1已true了，后面无所谓了，直接出true。

  ```js
  alert( 1 > 2 && num);
  
  //此时num没有初始化，如果直接写 alert（num）肯定会报错，但是因为 短路操作机制的存在，
  //系统允许 1>2时，就已经判断是false，并且跳出 && 了
  //所以不会运行后面的 num;
  // 因此 最终 他alert显示为   false;
  ```

+ ```js
  alert(Number(NaN));
  //NaN
  alert(Number(null));
  // 0
  alert(Number(undefined));
  // NaN
  alert(Boolean(NaN));
  // false 
  alert(Boolean(null));
  //false
  alert(Boolean(undefined));
  //false;
  ```

+ 

----

## 流程控制语句

+ 顺序结构
+ 分支结构/选择结构/条件结构
+ 循环结构  