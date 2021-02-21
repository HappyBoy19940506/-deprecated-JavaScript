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

+ 可以使用同一类型的多个script标签， 多个script标签时，自上而下依次执行。

+ 一个html只能存在一种类型的script标签，要么执行script标签内部的，要么执行src外部引入的，不能同时都执行。

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

    + 但是不建议改变当前变量的数据类型，容易引起歧义。 比如var num 等于’hello'

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

    > 		+ \+
    > 		+ \- 
    > 		+ \* 
    > 		+ \ 
    > 		+ /
    > 		+  %(取余)
    > 	+ 自动数据类型转换( 加号➕）：
    > 	   	纯数字 直接算
    > 	       数字 + true/ false  /null 转换成 1/ 0 / 空  算
    > 	        数字+ NaN / undefined = NaN
    > 	        String 和 +号 ：字符串拼接。连 NaN也可以拼。'haha'+NaN= 'hahaNaN'
    > 	+ 自动数据类型转换( 非 加号）：
    > 	   + 纯数字，直接算
    > 	   + 数字和string，如果string是数字，可以当做数字算
    > 	   + 数字和string，但是string不是数字，等于  NaN
    >	
    > 	```js
    > 	alert(100 + 10);
    > 	// 110
    > 	alert(100 + '10' + NaN);
    > 	// 10010NaN
    > 	alert(100 - 10);
    > 	// 90
    > 		
    > 	👇**************👇
    > 	alert(100 - '20');
    > 	// 80
    > 	👆**************👆
    > 	alert(null + 'sb');
    > 	//nullsb
    > 	alert(1 + 1);
    > 	// 2
    > 		
    > 	👇**************👇
    > 	alert('1' + 2);
    > 	//12
    > 	👆**************👆
    > 	alert('1'+ '3');
    > 	//13
    > 	***************
    > 	👆**************👆
    > 		
    > 	alert(1 + 'wori');
    > 	//1wori
    > 	alert(1 + NaN);
    > 	//NaN
    > 	alert('100' - 20);
    > 	//80
    > 	alert('100' - '30');
    > 	//70
    > 	alert(100 - 'a')
    > 	//NaN
    > 	alert( 100 - '100aa')
    > 	//NaN
    > 	alert(NaN + 'wori')
    > 	//NaNwori
    > 	alert(1 + null);
    > 	//1
    > 	alert(1 + undefined);
    > 	//NaN
    > 	alert(1 + true);
    > 	//2
    > 	alert(1 + false);
    > 	//1
    > 		
    > 	///说白了一句话，就下面2个点。
    > 	/// +号(表达式里只有+号) 和 string（只要出现哪怕一个） 同时存在时候，触发 拼接特效，会把 ➕号左右的东西全都拼起来
    > 	///别的时候，看看能不能转成全部都是数字，如果不行，一定是 NaN
    > 		
    > 	```
    >	
    > 	---
    >	
    > 	---
    >	
    > 	---
    >	
    > 	```js
    > 	// 1. 小数计算误差， alert(0.8 - 0.2) 算出来显示的不是0.6 ，而是0.600000001
    > 	
> 	//	2.	在JS中，可以 除以0.
    > 	alert(3 / 0); alert( -3 / 0);
    > 	//结果是  infinity 和 -infinity;
    > 	//这个infinity 是一个number类型的数字，也就意味着 它遵循： 
    > 	// 遇到+号 string变拼接
    > 	//以及 全部都是数字的情况下，可以相加减的 规则。
    > 	```
    >
    > 	

    	



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

## 关系运算符< > ==

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

## 逻辑运算符&&||!

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
    > // true ---- 1
    > alert(!'ss');
    > //false ----0
    > alert(!0);
    > //true; ----1
    > alert(!10);
    > //false; ----0
    > alert(!NaN);
    > //true; ---- 1
    > alert(!null);
    > //true; ---- 1
    > alert(!undefined);
    > //true; -----1
    > alert(!Infinity);
    > //false;  -----0
    > 
    > alert(!'0');
    > //false; -----
    > 
    > alert(Boolean('0'));
    > //true;
    > 
    > //总之一句话：   先转化成布尔值 再取！
    > //  NaN， null ， undefined , 0, '空' ,他们取布尔值 都是 0，也就是 false；
    > // 但是 ’0’ 取boolean（），不是0，是1. 是true， 不是 false
    > ```
    > 
    >
    
+  注意 短路操作：在 &&中，如果 exp1已经判为false了，那后面不管咋样都是无所谓了，直接出false结果。同理在 ||中，如果 exp1已true了，后面无所谓了，直接出true。

    ```js
    alert( 1 > 2 && num);
    
    //此时num没有初始化，如果直接写 alert（num）肯定会报undefined，但是因为 短路操作机制的存在，
    //系统允许 1>2时，就已经判断是false，并且跳出 && 了
    //所以不会运行后面的 num;
    // 因此 最终 他alert显示为   false; 而不是 undefined；  
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
    alert(Boolean('0'));
//true
    ```
    
+ 

----

## 流程控制语句

+ 顺序结构

    ```js
    var num1 =	20;
    var num2 =	30;
    alert(num1 + '+' + num2);
    var temp = num1;
    num1 = num2;
    //num1 --> 30;
    num2 = temp;
    //num2 -->  20;
    alert(num1 + '+' + num2);
    
    //交换两个数的值，需要引入第三个量。
    ```

    
### if - else
+ 分支结构/选择结构/条件结构

    + 单分支结构

        ```js
        if ( 条件语句为 true){
            执行该语句;
            }
        /////
        var num = 8;
        if ( num % 2 == 0){
          alert(num+ 'is an even');
        }
        ```

    + 双分支语句

        ```js
        if ( 条件语句为 true  ){
              执行该语句;
            }else{
            否则执行该语句;
        }
        
        var num = 7;
        if (num % 2 != 0){
          alert('this is an even');
        }else{
          alert('this is an odd');
        }
        
        var year = 1922;
        if((year % 400 == 0)||((year % 4 == 0 ) && (year % 100 != 0 ) )){
            alert('run nian');
        }else{
            alert('bu shi run nian');
        }
        ```

    +  多分支语句

        ```js
        if(条件1){
           执行1;
        }else if(条件2){
           执行2;    
        }
        ...
        else{
          所有情况都不成立，执行;
        }
        
        
        ///也就是 条件有 很多种的情况下。
        比如：
        var num = 6;
        
        if(num < 1){
            alert('y is' + num);
        }else if( num < 10 && num >= 1){
            alert('y is' + num);
        }else{
            alert('y is ' + num);
        }
        ```
### switch

- switch的多分支语句

```js
+ switch的多分支语句

    switch(exp1){
        case 常量1:
            执行语句1;
            break;
        case 常量2:
            执行语句2;
            break;
        case 常量3:
            执行语句3;
            break;
        ...
        default:
            执行语句;
        		break;
    }
    //这里的exp1不是布尔值，而是一个没计算的式子
    // case后面的常量就是 exp1可能的各种值
    // 如果全都不满足，执行default
    
    var grade = 'C';
    
    switch(grade){
        case 'A':
            alert('80-100');
            break;
        case 'B':
            alert('80-100');
            break;
        case 'C':
            alert('801-1010');
            break;
        default:
            alert('worinima');
            break;        
    
    }
​        //也就是说， switch多用在 同一个条件，不同值的情况下。
​        //所以说，一定可以转换成if else
​        //但是else if 可以处理 多个 不同条件下的情况。
​        ///而且 switch中的条件 值的个数是固定的。  
```




### exp1 ? exp 2 :exp3

+ 三目运算

```js

    exp1 ? exp2 : exp3
    //意思就是， exp1如果为真，就执行exp2
    //如果exp1为假，那就执行exp3.
    相当于一个 简写版的 if else

    常用例子：
    简写一个 a和b的较小数：
    var min = a <=b ? a : b;

    // exp1 ? exp2 : exp3


```

​        

+ switch结构中省略break简写:
  
    ```js
    var month = 8;
    switch(month){
        case 1:
        case 2:
        case 3:
        			if(month % 4 == 0){
                alert('shabi');
             	  }else{
                  alert('28');
                }
             		break;
        case 4:
            alert('worinima');
            break;
    default:
            alert('wocaonidie');
            break;
    ///case 1,2,3,4合并到一起写。
        
    ```

​    


### while loop
+ 循环结构  

    + while

        + ```js
            while(循环条件){
            	循环语句；
            }
            //如果循环条件成立时就执行循环语句；
            
            ```

        + ```js
            var i = 0; //计数
            while( i < 10){
              i++;
              document.write('hello');
            }
            //打印10次。
            ```

        + ```js
            //循环的步骤：
            1. 确定循环次数 var i = 0;  while（i < 次数+1）
            2. 确定每一次循环的要执行的代码;
            //但是不能 在while 条件里面 写 永远为true的 条件。不然死循环，一直循环下去。
            ```

        + ```js
            计算1 到 100的和;
            var i = 1;
            var sum = 0;
            
            while(i < 101){
                sum = sum + i;
              // sum += i;
                i++;
            }
            
            alert(sum);
            ```

        + ```js
            计算1/1-1/2+1/3-1/4+1/5 …… + 1/99 - 1/100
            // 思路一：  while设置次数， if判断奇数偶数，偶数就把sum+ （-1）*1/i；
            var i = 1;
            var sum = 0;
            while(i < 101){
                if(i % 2 == 0){
                    sum = sum - (1 / i);
                }else{       
                    sum = sum + (1 / i);
                }  
                i++;
            }
            alert(sum);
            
            
            //思路二： 多设置一个var flag=1,跟着循环次数，每次*-1,这样在第2，4，6，8...次时乘以 1/i， 这样 1/i在偶数位置的时候就为负数。
            var i = 1;
            var  sum = 0;
            var flag = 1;
            while( i < 101){
                sum = sum +  flag * (1/i);
                i++;
                flag = flag * (-1);
            }
            alert(sum);
            
            
            //错误思路:  仔细看，在出if判断的时候，i的值已经变了，比如如果是负数，此时已经变成-7了，你再去i++,显然 -7后面+1变成-6，而我们要的是8.
            var i = 1;
            var sum = 0;
            while(i < 101){
                if(i % 2 == 0){
                    i = i * 1;    
                }else{
                    i = i * (-1);
                }
                document.write(i);
                i++;
                //这里i死循环了，因为i++时候的i 并不是想象中的i，有可能比如是-7，-9这样的负数了。
            } 
            ```

        + 
    ### do_while loop
    + do_while

        + ```js
            do{
            	循环语句
            }while(循环条件);
            ```

        + ```js
            var i = 1;
            var sum = 0;
            do{
              sum += i;
              i++;
            }while(i <= 100);
            alert(sum);
            ```

        + ```js
            既然一样，为什么要存在？
            //顺序问题。
            do{
            	循环语句
            }while(循环条件);
            //先执行以下循环语句。再去判断循环。
            //也就是说，不管循环成不成立，至少运行一次。
            
            ```

        + 
    ### for loop
    + for

        + ```js
            for(exp1; exp2; exp3){
            	execute parse;
            }
            //exp1 -- i初始值 
            //exp2 -- i最终值
            //exp3 -- i++
            //三个加起来，决定了 1 到 100，每次加1；
            ```

        + ```js
            1到100的和用for循环来写。
            for(var i = 1; i <= 100; i++){
            // 从1开始数，数到100，每次加1，
            	sum += i;
            }
            ```

    + break 和 continue

        + ```js
            for(){
              if(i == 5){
                break;
                // 当i等于5，直接中断循环。
              }
               if(i == 5){
                continue;
              // 当i等于5， 跳过i=5的这次执行语句。
              }
            }
            ```
    
    + 死循环：

        + 循环条件永远成立：

             + ```js
                while(true或者1){
                	execute
                }
                //
                do{
                  execute
                }while(1);
                //
                for(;;){
                  execute
                }
                ```
### nested for{} loop
+ 循环嵌套

    + ```js
        打印三角形
        *
        **
        ***
        ****
        *****
          
        for(var i = 1; i <= 5 ; i++){
          //设置有几行；
          for(var j=1; j <= i; j++){
            //在每一行设置 打印几个*； 获取到此次循环中，i的值，然后j<=i;
            document.write('*');
          }   
          document.write('</br>');
        }
        ```

    + ```js
        打印三角形
        
        for(var i = 1;i <= 5;i++){
            for(var k =1; k <= (5-i);k++){
                document.write('😃');
            }
            for(var j = 1;j <= i;j++){
                document.write('*');
            }
            document.write('</br>');
        } 
        ```

    + ```js
        9*9乘法表
        
        /* for(var i = 1; i <= 5 ; i++){
            for(var j=1; j <= i; j++){
              document.write(j + '*' + i + '='+ (i*j) +'&nbsp');
            }   
            document.write('</br>');
          } */
        
        ```

        

    + ```js
        判断质数还是合数
        var num = 17;
        var zhishu = true;
        for(i = 2;i < num;i++){
            if(num % i == 0){
                zhishu = false;
                break;
            }
        /*     else{ 测下一个 i} */    
        }
        
        if(zhishu == true){
            alert('zhishu');
        }else{
            alert('heshu');
        }
        
        ```

    + ```js
        水仙花数： 三位数 = 个位 十位 百位上的数字的立方之和。
        //思路一： 每个位设一个var
        //肯定这个复杂度要高的多。不推荐
        
        for(var i = 0;i <= 9;i++){
            for(var j = 0;j <= 9;j++){
                for(var k = 1;k <= 9;k++){
                    var temp = 100 * k + 10 * j + i;
                    if(temp == Math.pow(k,3) + Math.pow(i,3) + Math.pow(j,3)){
                        document.write(temp +'='+i+'*'+j+'*'+k+ '</br>');
                    }
                    // if(temp = i*i*i + k*k*k + j*j*j){
                    //      document.write(temp +'='+i+'*'+j+'*'+k+ '</br>');
                    //  } 
                    //  document.write(temp+ '</br>');
                }
            }
        }
        
        
        //思路二： 直接三位数设为var
         for( var i = 100; i < 1000; i++){
             var a = i % 10;
             var b = parseInt(i / 10) % 10;
             var c = parseInt(i/100);
             if(i == Math.pow(a,3) + Math.pow(b,3) + Math.pow(c,3)){
                 document.write(i+ '</br>');
             }
         }
        ```

    + ```js
        输入两个数，求这两个数的最大公约数。
        //思路一， 你的方法老是for for ，空间复杂度太高！
         var a = 12;
 var b = 6;
         var num = 0;
         for(var i = 1; i <= a;i++){
            for(var j = 1; j <= b;j++){
                if(i == j && (a % i == 0) && (b % j == 0) ){
                    num =  i; 
                }
            }
         }
         document.write(num + '*');
        
         //思路二： 从2个数中的较小数开始判断，判断能不能被2个数整除，如果可以，直接出结果，如果不可以，减一之后继续判断。
        
        var a = 15;
        var b = 75;
        
        /*if(a <= b){
            var num = a;
        }else{
            num = b;
        }*/
        
        var num = a <=b ? a : b;
        
        // document.write(num);
        for(var i = num; i >= 1;i--){
            if( a % i == 0 && b % i ==0){
                document.write(i + '*');
                break;
            }
        }
        
        
        ```
        
    + ```js
        输入两个数n和a.
        比如 n为3 ， a 为2的话，输出 2+22+222
        比如 n为4 ， a 为3的话，输出 3+33+333+3333的值。
        
        var n = 4;
        var a = 3;
        //output 2 22 222
        // n=1 --2
        // n=2 --22
        // n=3 ---222
        var sum = 0;
        var finalSum = 0;
        for(var i = 0; i <= (n-1); i++){
            sum = a * Math.pow(10,i ) + sum;
            // document.write(sum + '</br>');
            finalSum += sum;
            // document.write(finalSum + '</br>');
        }
        document.write(finalSum);
        ```
    
    + ```js
        五位数中，对称的数称为回文数。比如 12321，找出所有回文数。
        for(var i = 10000; i <= 99999; i++ ){
            var a = i % 10; //ge wei;
            var b = parseInt( (i % 100) / 10 ); // shiwei;
            var c = parseInt((i % 10000) / 1000); // qian wei;
            var d = parseInt(i / 10000); // wang wei;
            // document.write(a + '*'+ b+ '*'+ c+ '*'+ d);
            if( a == d && b == c){
                document.write(i+'</br>');
            }
        }
        ```
    
    + ```js
        ** switch配合break**
        题目： 输入 年、月、日，计算某一天是该年的第几天？
        	var year=parseInt(prompt('输入年'));
            var month=parseInt(prompt('输入月'));
            var day=parseInt(prompt('输入日'));
            var allDays=0;//所有天数
            for (var i=1;i<month;i++){
                if (i===1||i===3||i===5||i===7||i===8||i===10||i===12){
                    allDays+=31;
                }
                else if (i===4||i===6||i===9||i===11){
                    allDays+=30;
                }
                else{
                    if (year%4===0&&year%100!==0||year%400===0){
                        allDays+=29;
                    }
                    else {
                        allDays+=28;
                    }
                }
            }
            allDays=day+allDays;
            document.write(allDays)
        
        
        ```
    
    ----



## function

1. function申明：

    - ```js
        	function name ( ){
            
            		code;
            
        }
        //无参数无返回值
        
        	function name (arg1,arg2... ){
        
        		code;
        
        }
        //有参数无返回值
        	function name (arg1,arg2... ){
        
        		code;
        	  return  表达式；
        }
        //有参数有返回值
        //如果不写return，那就是没有返回值，你做 var a = function（agr1）的时候 会显示 underfind。a取不到任何值。
        //一个function不一定只能写一个return，但是遇到return一定会终止运行function。
        ```

2. function调用：

    ```js
    function_name();//
    function_name(arg1,arg2...); //
    ```

3. 函数封装的步骤：

    ```js
    1.找出不确定的值，不确定的值就是形参。灵活根据有没有不确定的值（如果有，那就是形参），以及值要不要用别的地方来决定（如果其中有值要提出来，要那就是return）， 用三种之中的哪种function。
    2.不确定的值写成形参。
    3.函数名和形参名都要遵循semantic;
    4.注意:不能将函数的运行的处理结果写在函数里面，意思就是 封装函数运行的结果不要显示成alert/ doc.write这种。 也就是说，应该用 var a = fuc(arg1); 然后再alert(a);  这样。
    ```

    

----

## arguments

1. 每个function内部默认都有一个内置的函数 arguments、

2. arguments其实是一个数组，用来存储输入的实际参数.

3. ```js
    function show(1,2,3,4){
      alert(arguments.length);
      //output 4. 
      alert(arguments[2]);
      //从0开始，所以2号位置上是 3;
    }
    ```

4. ```js
    知道这个有什么用？
    处理极端情况： 比如 要你求输入任意个数的和，我不确定参数的个数.只知道一定要写形参。
    所以function sum（）的（）里我不知道写什么。
    遇到这种情况可以这么写。
    
    function sum(){
      var result = 0;
      for(var i = 0;i < arguments.length;i++){
        result += arguments[i];
      }
      return result;
    }
    
    //调用：
    var  num = sum (19,20,22,22);
    alert(num);
    ```







----

## 作用域

1. 内存管理机制：

    > ​	调用函数要占用内存，每调用一次完之后 ，会回收内存。

2. 直接在内存里面申明的变量，叫做```全局变量```，它永远不变化的。不会因为函数变化而变化。

3. 在函数内部的变量，叫做```局部变量```，他会存着 函数的内存回收时候销毁 而跟着一起销毁。

4.  也就是说，函数中声明的变量和形参，有效范围只有在function内部的大括号

5.  ```局部作用域``` 在函数内部的作用域。

6. ```js
    var a = 10;
    var b = 20;
    
    function  show(a){
      var b = 100;
      a += 5;
      alert(a +','+b);
      
    }
    
    //show(a)，此时意思是调用show函数，并给他一个实参，这个实参是a，那么正好有一个全局变量叫a，那么就是把a的值当做实参传输给 正在调用的show函数。
    show(a); //15,100 
    
    //函数执行结束，内部变量全部销毁，a和b还是全局变量。
    alert(a + ',' + b); //10,20
    ```

7. 全局变量 可以在任何function内部访问到，但是局部变量不能再函数外面被访问到。

-----

##  函数递归

1. 满足三个条件就是递归。

    1. 函数自己调用自己
    2. 一般情况都有参数
    3. 一般情况下又return值

2. 递归可以解决循环能干的所有的事情。以及循环不太能解决的问题。

3. 递归都可以写出来，但是不知道为什么是对的。

4. 方法：

    >   1.第一步，先找临界值，临界值的意思是无需计算，就可以获得的值。
    >
    > 	2. 找这一次和上一次的关系
    >  	3. 假设当前函数已经可以使用，调用自身计算上一次。

5. 递归，没有算出临界值之前，会一瞬间开辟一大堆内存空间，却没有释放，然后一瞬间释放一大堆内存，所以会影响内存效率。

6. 递归的练习 

    1. ```js
         有一对兔子，从第四个月开始，就可以生一对兔子，第20个月的月末有一共有机制兔子。
         ///月份 总数
         /// 1月 1
         /// 2月 1
         /// 3月 1
         /// 4月 2
         /// 5月 3
         /// 6月 4
         /// 7月 6
         /// 8月 9
         /// 9月 13
         ///rabbit(4) =  rabbit(3) + rabbit(1);
         ///rabbit(n) =  rabbit(n-1) + rabbit(n-3);
         function rabbit( n ){
           if(n < 4){
             return 1
           }
           
           return rabbit(n-1) + rabbit(n-3);
         }
        ```

    2. ```js
        猴子吃桃子，n个桃子，每天吃掉 （桃子的一半+1）个桃子，最后一天(第num天，且num <= 10)发现还剩一个桃子,请问一共有多少个桃子。
        ///也就是说 第10天，有1个桃子
        ///问第一天有几个桃子。
        /// 如果我们设n为 还剩下的天数
        /// 那么，第10天，就是还剩1天，也就是 n=1时，意思就是第十天。
        /// 公式就是 ： 第2天的桃子，是第1天的桃子的一半 再减去1 ；
        /// peach (2) = peanch (1) /2  -1 ; 
        /// peach( n ) = 2*(peach (n -1)+1 );
        function peach( n ){
          if ( n == 1 ){
            return 1;
          }
          return  2*(peach (n -1)+1 );
        }
        ```

    3. ```js
        在页面上输出n个hello world。
        // n = 0 return 0;
        print(n) = print(n-1) + helloworld;
        
        function print(n){
          if (n == 0){
            return 0;
          }
          document.write('hello world');
          return print(n-1);
        }
        ```

    4. ```js
        用递归写出 计算1 到 n的和：
        function sum(n){
            if(n == 1){
                return 1 ;
            }else{
                return sum(n-1)+n ;
            }
        }
        
        var res = sum(100);
        alert(res);
        
        ```

    5. 



---

## Array数组

1. 数组的本质，就是用一个变量，存贮一堆数据。

2. 如何申明一个数组：

    ```js
    var arr = new Array(100, true, '77');
    
    // 也可以省略new
    
    var arr = Array(100,99,1);
    
    //也可以用常量表示
    
    var arr =[100, true, '77'];
    
    // index都是从0开始。
    
    //【但是注意，当 用 var arr = new Array时，如何（参数）里写得 是一个单独的数字的话，他意思不是 存入数组，而是申明数组的长度】
    
    比如：
     var arr = new Array(3);
    这句话的意思 其实是，有3个房间的数组。
    ```

3. 数组的属性

    1. ```js
        数组.length
        var arr = [100,true,1];
        arr.length
        ```

    2. ```js
        访问数组的元素
        数组[下标]
        var arr = [100,true,1];
        arr[1];
        ```

    3. ```js
        数组+循环
        for(var i = 0; i < arr.length; i++){
          document.write(arr[i]+'</br>');
        }
        ```

4. 数组的遍历

    1. ```js
        随机生成一个0-9随机数字的数组：
        function randomNumber( ){
            var arr = new Array(10);
            for (var i = 0; i < arr.length; i++){
                arr[i] = parseInt(Math.random() * 10);
                // Math.random() 会随机生成0到1的小数，包括0，不包括1. 把他乘以10，就会变成0到9的小数。然后再取整，就可以随机生成0-9的数字。
            }
        
            alert(arr);
        
        }
        
        randomNumber();
        ```

    2. ```js
        for in 遍历, 快速遍历. 
        for ( var i in arr){
          xxxxx;
        }
        // 如果数组长度变化，就出bug
        ```

5. 数组的方法

    1. ```js 
        栈结构
        后进先出
        先进后出
        
        数组的两个方法形成栈结构。
        push.
        格式： array.push（arg1,arg2...);
        
        var arr = [1,2,3];
        arr.push(4,5,6);
        alert(arr);
        // 1，2，3，4，5，6
        //arr.push 返回值 为 插完新元素之后的数组的新长度。
        所以.
        var res = arr.push;
        alert(res);
        // res 值为6;
        
        ```

    2. ```js
        栈结构
        pop
        数组末尾 弹出一个末尾元素；
        格式： 数组.pop(); 
        //注意： 没有参数，没有实参，没有形参，就是直接 array.pop();
        返回值是 取出的那个元素的值。
        e.g.
        var array = [1,2,3];
        var res = arr.pop();
        alert(res);
        alert(arr);
         //结果是res 为3
         //arr 变成 [1,2]
        ```

    3. ```js
        队列结构
        特点:先进先出，从末尾进，从头部出。
        push 这个和 栈结构的push一样，就是从末尾推进去一个。
        shift()
        格式： array.shift();
        // 没有参数，类似pop();
        //  功能： 从数组的头部取下一个元素;
        // 返回值： 取下的元素；
        e.g.
        var arr = [1,2,3];
        var res =arr.shift();
        alert(res);
        alert(arr);
        // res--> 1
        // arr --> [2,3]
        ```

    4. ```js
        队列结构
        unshift();
        格式： array.unshfit(arg1,arg2);
        //类似于 array.push()
        功能: 从头部插入元素
        返回值： 插入后队列的长度
        
        var arr = [1,2,3];
        var res =arr.unshift(0);
        alert(res);
        // 4
        alert(arr);
        // [0,1,2,3];
        ```

         

    5. > 总结： 头插  unshift 
        >
        >  头取 shift
        >
        > 尾插 push
        >
        > 尾取 pop 
        >
        > 关于 插入的，返回值都是掺入后的新数组长度
        >
        > 关于取出的， 返回值都是 取出的那个元素

    6. 更多关于数组的方法

    7. ```js
        concat()
        格式： array,concat(数组，数据)；
        功能：拷贝原始数组，生成新的数组 
        功能二：合并数组
        返回值：合并成的新数组
        e.g.
        var arr1 = [1,2,3];
        var arr2 = [4,5,6];
        var arr3 = arr1.concat(arr2,'hello');
        alert(arr3);
        //[1,2,3,4,5,6,hello];
        alert(arr3.length);
        //8 --？ 看清楚为什么不是6.因为 concat如果加入的是一个数组，那么他会把这个数组里面的元素全部提取出来，也就是说，他在加入arr2的时候，不是把arr2当做一个整体，而是把arr2里面的三个元素提取出来，当做三个加进去了。
        alert(arr1);
        // [1,2,3] 没变化
        所以说。arr1.concat并不会改变arr1的内容，他只是复制了一个新的arr1再做操作
        ```

    8. ```js
        slice()
        功能：提取数组里面的片段
        格式: array.slice(start,end);
        这里的start和end都是index下标。
        而且注意，提取的 数组是 [start,end)。 也就是说 包括起始的index的那个元素，但是不包括 结束end的那个元素。
        返回值：生成新的数组。 且 :star:原数组不发生任何改变。
        var arr =[1,2,3,4,5];
        var newArr = arr.slice(1,4);
        alert(newArr);
        // [2,3,4]
        alert(arr);
        //[1,2,3,4,5]
        ```

    9. :star:

        ```js
        splice 方法： 我一般理解为 替换操作， 参数1：替换的位置。 参数2，替换的长度，参数3，要替换进去的片段。返回值： 被替换出来的片段
         // 和slice最大的区别是。 他会 改变原数组。
         // 和slice最大的区别是。 他会 改变原数组。
         // 和slice最大的区别是。 他会 改变原数组。
         // 和slice最大的区别是。 他会 改变原数组。
        所以他的返回值 是提取出来的数组。 而原数组会发生改变、
        格式： array.splice(start , length , 需要加入的元素1， 需要加入的元素2);
        功能： 由于其特性，可以实现三个功能。 添加， 删除 ，修改。
        返回值：截取下来的片段数组， 而且原数组会发生改变。
        
        添加：
        var arr1 = [1,2,3,4，5];
        var newArr = arr1.splice(   2 ,        0 ,           'hello');
        ---------------------start位置（也就是第一个替换的位置） -- 截取数组的长度---- 插入的元素
        
        alert(arr1);
        // 原数组改变，改变成  [1, 2 ,hello，3  ,4，5];
        alert(newArr);
        // null 因为你截取数组长度为0，所以数组长度为0.
        
        
        删除：
        
        var arr1 = [1,2,3,4，5];
        var newArr = arr1.splice( 1 , 2 );
        // 从 1号位开始取，取2个 提取出来。
        alert(arr1);
        //[1,4,5]
        alert(newArr);
        //[2,3]
        
        
        修改：
        
        var arr1 = [1,2,3,4，5];
        var newArr = arr1.splice( 2 , 1 ， hello );
        //  修改其实是 先 删除该位置上的元素，再添加入一个元素在该位置。也就是 删除+添加功能同时用。
        // 从 2号位开始取出元素，长度为1 ，那就是取了一个3，然后再插入hello。
        alert(arr1);
        //[1,2,hello ,4 ,5]
        alert(newArr);
        //[3]
        ```

    10. ```js
        join方法：
        格式： 数组.join(字符串);
        功能： 修改显示效果，之前数组元素直接都是用 ， 来分隔的。
        返回值：替换字符串后的数组。
        
        var arr  = [1,2,3];
        var res = arr.join(*);
        
        alert(arr);
        // 1,2,3
        // 也就是说 不改变原数组
        alert(res);
        //1*2*3
        ```

    11. ```js
        reverse方法：
        功能： 数组倒序展示
        格式：arr.reverse();
        **会改变原数组**
        var arr1 = [1,2,3,4];
        var res = arr1.reverse();
        alert(arr1);
        alert(res);
        //一样，都是4,3,2,1
        ```

    12. ```js
        sort()方法
        功能： 从小到大排序。但是注意， 是按照 ASCO码值来比较的。
        格式：array.sort()  /  array.sort( function sortNumber(a,b){ ...})
        默认情况下， 直接写 array.sort( ) 会按照asco码来排序，这就导致了 会出现 134，14,213,这样的情况。
        如果你要按照 numerical来排序，要写一个比较函数。
        具体看例子：
        
        var arr1 = [122,12,34,4];
                                                                 
        var res1 = arr1.sort();
                                                                 
        alert(res1);
        //12,122,34,4
                                                                 
        var res2 = arr1.sort(function sortNumber(a,b){
            return a - b;
        })
        
        alert(res2);
        
        //4 ,12, 34 ,122
                                                                 
                                                                 
        如果要从大到小排序，那就把比较函数里的a和b反过来。
        写成：
        arr.sort(function sortNumber(a,b){
          return b - a;
          //从小到大是a-b;
        })
                             
        *************
         sort()和 reverse()，他们都会把原数组改变。而且返回值也是改变后的新数组，
        这就导致了，他们的一个共同点，那就是 返回值的数组 和 改变之前的数组，都变了。
        var arr1 = [...]
        var res = arr1.sort() / arr1.reverse();
        // arr1   与   res 值相同，
        //  都是变化之后的新生成的数组， 也就是说，会改变原数组。
                                                                
        ```

    13. 数组求平均数

        > ​	题目：有一个数组，有30个位置，从一号位开始，分别是0，2，4，6....一直到60.
        >
        > ​	现在要求把这些数，每五个一取，然后把这五个数求平均数，然后放入到一个新的数组中。

        ```js
        function average(){
            var arr1 = new Array(30);
            var arr3 =[];
            for(var i = 0; i < arr1.length; i++){
                arr1[i] = (i + 1) * 2;
            }
            // alert(arr1);
            // document.write(arr1);
            for( var j = 0; j < 6;j++){
                // alert(arr1);
                // alert(arr1.length);
                var arr2 = arr1.splice(0,5);
        
               /* 
               Same
               var arr2 =  arr1.slice( 5 * j , 5 * (j+1)  ); 
               Same
               */
        
                // document.write(arr2 + '</br>');
                // calculate the avarge of each arr2;
                /* 
                if use the arrary.slice( ) , instead of splice();
                arr1.slice(0 , 5);  ---first time ,when j = 0
                arr1.slice(5 , 10); ---second time, when j = 1
                arr1.slice(10,  15);----third time, when j = 2
                ... six times total
        
                var arr2 =  arr1.slice( 5 * j , 5 * (j+1)  );
        
                */
                var sum = 0
                for(var k = 0; k < arr2.length;k++){
                    sum += arr2[k]; 
                }
                // alert(sum);
                // document.write(sum + '</br>');
                var average = sum / arr2.length;
                //document.write(average + '</br>');
                arr3.push(average);
            }
            document.write(arr3);
        
        }
        
        average();
        ```

----

## Reference data type

1. 基本数据类型： Value Data Type

    引用数据类型： Reference Data Tpe

2. 问题：

    ```js
    var num1 = 10;
    var num2 = num1;
    alert(num2);
    // num1 --> 10;
    // num2 --> 10;
    num2 = 20;
    alert(num2);
    // num1 --> 10;
    // num2 --> 20;
    
    这就是正常的 基本数据类型的赋值，var之后就是简单的申明变量，然后赋值，变量赋值变量，实质上就是把变量里面的值提取再赋给下一个变量而已。
    ```

    **但是， 如果是array会出现如下问题**：

    ```js
    var arr1 = [1,2,3];
    var arr2 = arr1;
    arr2.push(4);
    alert(arr1); // ----> [1,2,3,4]
    alert(arr2); // ----> [1,2,3,4]
    //你会发现之前的逻辑不适用了，arr1和arr2相等，但是我给arr2 push了一个4，但是结果会变成arr1和arr2都会被push一个4！
    //这就是 因为array是引用数据类型导致的问题。
    ```

    ```js
    var arr1=[1,2];
    var arr2=[3,4];
    arr1 = arr2;
    // 此时， arr1已经变成了 arr2的值，也就是[3,4].
    //如果alert会发现两者都是[3,4];
    //但是如果，此时
    arr2.push(4);
    //看似只对arr2进行push操作了，但是因为是引用类型。
    alert(arr1); //都是[3,4,4]
    alert(arr2); //都是[3,4,4]
    ```

3. 而且 引用数据类型，是不能比较大小的。

    ```js
    
    var arr1=[1,2];
    var arr2=[1,2];
    var res = (arr1 == arr2);
    document.write(res);
    
    //表面上看 arr1 和 arr2 完全一样，都是[1,2]
    //但是其实 他们无法比较， res 的值为 false；
    // 题外话： 所以冒泡排序这类题目里。无需担心该数组是 二维数组，因为二维数组是不能冒泡排序的，因为他的元素 是数组，数组之间是不能写 arr[1] < arr1[2]这种判断语句的。
    ```

    

4. 根本原因：

    ```js
    -在array里，因为 数组长度是变化的，但是在内存中 申明一个变量必须提前申明所占空间内存大小，是不可以事后再更改的，那就和array的属性矛盾了，因为你数组里面储存的数据是时时刻刻发生变化的。
    -那怎么办呢？
    -所以设计者在设计array时，把内存分为了  程序运行块 | 堆 。 那块结构， 在【堆】里随意扔任意长度数据，是可以随机随时任意拉伸的长度，然后把数组里面的数据都赛里面，然后设置一个编号，传给对应的在【程序运行段】的数组，所以表面上你看到的是 数组[1，2，3],其实 数组名只是一个代号，并不是真的拥有【1，2，3】数据的人。
    -所以，当你 把arr2 赋值给 arr1时候，只是把编号传给了 arr1， 两者所指的指针其实都指向同一个 [堆]。所以 你再改变任何 【1，2，3】的数据的时候，堆里面的数据改变了，那你不管是arr1还是arr2，指向都是这个【堆】，所以当然全都变化了。
    
    ```

    

5. 实践中的解决办法：

    1. concat() 来复制数组。

        ```js
        concat 方法。 回顾一下： 
        1. 不改变原数组（因为是先复制一个原数组的分身，再在分身上进行操作的，且分身指向另一个堆，只是2个堆里面的数据一模一样罢了）。
        2. 参数 可以填任意，但是 如果填 数组，他会拆分成子数据，融合进去
        3. 返回值---融合后的新数组
        所以：
        var arr1 =[1,2,3];
        var arr2 = arr1.concat();
        arr2.push(4);
        alert(arr1);
        // arr1 不变化,还是 [1,2,3,4]
        alert(arr2);
        // arr2 --> [1,2,3,4]
        ```

        

    2. 避免

        > ​	应该禁止使用  
        >
        > ```js
        > (X)var arr2 = arr1;
        > (X)这种操作。
        > (X)因为如果你后期 arr1发生变化， arr2也会不经意间发生相同的变化。
        > ```

    3. 说白了一句话

        > ​	针对指向同一个地址的数组的各种操作 会直接改变数组，如果想保留原数组，要用从concat复制一个新的。

-----

## 预编译和申明提升

1. > ​	内存在分配的时候，会提前划分好空间，不可以后续更改内存空间大小。
    >
    >    并且程序会进行 ```预编译```:   他会做调用函数，或者执行代码之前先 preview一下，把var先提前划分好。 譬如 ``` var num = 10; ```，他执行的其实是 先 在预编译阶段执行```var num;```，然后在执行段```num = 10;```，

2. ```js
    所以。在下列代码里面。
    alert(num);
    var num = 10;
    alert(num;)
    //最终结果是 第一个num显示 undefined； 而不是报错。
    //第二个num 显示 10；
    
    因为他先var了一个num，然后又不给他赋值，所以第一个alert直接就是undefined。
    第二个alert的时候已经赋值了，所以就是10.
    ```

3. ```js
    同理，函数也会 申明提升：
     
    show ();
    
    function show(){
     		return 0;
    }
    
    // 虽然表面上看起来，我先执行了函数，然后再才申明函数，顺序不对。但是show()照样也会执行，不会报错。因为 show（），属于预编译阶段，不受实际的从上往下的顺序影响。
    ```

4. ```js
    同理，局部作用域下，也会申明提升：
    
     function show(){
     		alert(num);
     		var num = 10;
     		alert(num);
     }
    show();
    //记住，不call就不会运行。
    alert(num);
    
    //在function 内部的局部作用域， 第一个alert(num) 显示为undefined，因为在函数内部进行了预编译，后面有var num； 
    // 然后第二个 alert 时候已经 赋好值了，所以正常显示num =10；
    //但是外面的第三个alert，他就不受影响了，没有申明，所以直接报错。
    ```

5. 

----

## 省略var申明变量

1. 变量会强制升级成全局变量。

2. ```js
    function show(){
       num = 10;
       alert(num);
      //10
    }
    show();
    alert(num);
    // 还是10， 因为num 没有写var，已经全局变量
    // 但是 这属于错误语法，不要用。
    ```

-



----

## 二维数组

1. ```js
    数组里面的元素可以是数组。
    
    var arr1 = [100, true, 'hello', arr2];
    // arr1[3] ---> undefined. 这一步，才做了预编译，申明了arr2，但是还没有赋值。
    var arr2 =[ 1, 2, 3];
    // 如果你要 去arr2里面的3你可以这么写：
    var res = arr1[3][2];
    //取的就是arr2[2];
    ```

2. ```js
    通过循环 创建一个 5*5的二维数组，分别赋值成1-25. 然后输出左下半部分（一个直角三角形）。
    
    function tri(){
        var arr1 = [
            [1,2,3,4,5],
            [6,7,8,9,10],
            [11,12,13,14,15],
            [16,17,18,19,20],
            [21,22,23,24,25],
        ]
        //arr1[i][j]
        for(var i = 0;i < 5;i++){
            for(var j = 0;j <= i;j++){
                document.write(arr1[i][j] + '&nbsp');
                if(i == j){
                    document.write('</br>');
                }
            }
        }
    }
    
    tri();
    ```

----

## 冒泡排序 bubbleSort

1. 原理：

    > ​	就是前后两两比较，如果前面的 大于 后面的，就交换位置。
    >
    >  保证 后面的数一定比前面的大，每一轮，都可以把一个最大数浮到最最后。就可以实现从小到大排序了。

    ```js
    数组长度 - 当前是第 n 轮   =  当前第n轮的比较次数；//因为两两比较，而且每轮会冻住最后一个数，所以比如第三轮，那已经冻住2个数了，所以 该轮下需要比较的数 只有length - 2个， 那length -2个，需要比较几次呢？需要比较 length -2 -1个，比如 6个数，第三轮的时候，就剩4个数要比较了，那4个数要比较几次呢，答案是3次。所以 第三轮，要比较3次。 
    ```

    ```js
    要比较多少轮 = 数组长度 - 1； //因为每一轮浮出来一个数到最后。
    ```

    

2. 例子：

    ```js
    原数组是 var array = [9,8,7];
    用冒泡排序就是：
    ----
    第一轮： 
    9 8 7（原始）
    8 9 7
    8 7 9 结束
    所以比较2次，原始不算
    ----
    第二轮
    8  7 （原始）
    7  8  (结束)
    所以比较1次，原始不算
    ----
    输出结果 7 8 9。
    ```

3. 实现:

    ```js
    function bubbleSort(arr){
        // [9,8,7,6,5,4]
        for(var i = 0;i < (arr.length - 1);i++){
            // 循环 arr.length - 1 轮； 比如6个长度，要比较5次。
            for(var j = 0; j < (arr.length - (i + 1));j++){
                //第（i+1）轮时，在该轮下要 执行 length - （i+1) 次比较；
                // 比如： 第 1 轮（i = 0）时，要在第 1轮下， 比较 6 - （ 0+1） =5 次。
                //也就是说 i =0 时， j =5 ， i =1 时，j =4.
                if (arr[j] > arr[j+1]){
                    var temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
        return arr;
    }
    
    var arr1 = [9,8,7,6,5,4];
    bubbleSort(arr1);
    alert(arr1);
    // var res = bubbleSort([9,8,7,6,5,4]);
    // console.log(res);
    ```

----

## 关于array的函数返回值问题

1.  首先看下，不是 ```引用数据类型```会是什么情况。

    ```js
    alert(num);
    var num = 10;
    alert(num);
    function ss(a){
        return a + 100;
       }
    alert(ss(num));
    //首先，根据 预编译的规则。 
    //第一个alert 报的是 undefined
    //第二个alert  报的是 10
    //当然 function 也预编译了，然后 第三个alert报的是 function sb的返回值，也就是 a+100,我们把形参a设置成 实参num，所以a此时为10，返回值就是110，
    
    所以三个alert分别是 undefined。 10 ，110.
    
    ```

2. 其次，如果是 ```array```会发生什么，为什么我们可以不需要写return.

    ```js
    alert(arr);
    //undefined;
    var arr = [1,2,3];
    alert(arr);
    // [1,2,3]
    sb(arr);
    function sb(a){
       a.push(4);
    }
    alert(arr);
    //[1,2,3,4]
    
    分析：//因为预编译，所以 function 和 var arr都提前预编译了，那么第一个alert就是undefined
    //第二个 arr已经赋值了，所以是[1,2,3]
    // 只要看第三个，首先， 要看这个 sb(arr) 【它可不是预编译的过程】; 也就是这个函数是在什么时候调用的，他在 第二个alert和第三个alert中间调用，那就是说，第三个alert就因为sb()而发生变化了。
    而且，为什么function可以不写返回值，直接 再输出参数，参数也发生变化了呢？
    对比 前面的num 。
    因为 num是简单数据类型， function 过后，改变的不是 num，因为他只是个参数。num无论怎么样，都是个参数，不变的，你最后看的的其实是 return。
    这里，其实 array也是一个参数，但是 因为 array的操作会直接改变原数组，所以你对参数输入后的，对参数的操作，已经改变了array了，你写return array 写了等于没写。
    你如果写 return num，那这个函数return啥也没变，输入啥 return啥。
    但是如果你 输入的是array，你return array。就不一样了。
    归根结底。还是因为有些array操作会改变原数组，也就是直接会改变输入 的实参。
    说白了，你用完sortbubble之后，原数组就不见了，如果你要保留原数组，你要提前写一个
    var oldArray = arr1.concat();
    然后你return arr1 也就是return新数组了。
    
    ```

-----

## 选择排序selectionSort

1. 逻辑： 从第一个位置开始，从该位置开始和后面所有的数进行比较，但是和冒泡排序不同的是，它不是相邻的两两比较而是，往后所有位置比较。比如1号位，他是1号位和2号位，1号位和3号位，1号位和4号位.... 如此比较下去。

2. 规律：

    1. > ​	每次轮都能选出一个最小的在最前面。然后弹出。 下一轮少一个继续。

    2. 公式：

        > ​	 要进行几轮    =  数组长度  - 1；（因为每次选出一个。这和冒泡一样）
        >
        > ​	该轮下要比较的次数  = 数组长度 - 当前第n轮 （也和冒泡一样）

    3. 实现：

        ```js
        function selectionSortAsc(arr){
            // var arr = [9,8,7,6,5,4]
            for(var i = 0;i < arr.length -1;i++){
                // i = 0 ,1 ,2, 3, 4,
                // i = 0 第一轮， 比较 5次
                for(var j = i + 1;j < arr.length ;j++){
                    // i = 0, j= i+1 = 1, j 取 1，2，3，4，5.确实比较5次；
                    //关键是这个5次怎么比较;
                    //比较的时候是， 1号位 和2号位， 1号位vs3号位， 1号位vs4号位，1号位vs5号位，1号位vs6号位。
                    //分别对应的就是 arr[0] vs arr[1] | arr[0] vs arr[2] |arr[0] vs arr[3] | arr[0] vs arr[4]|arr[0] vs arr[5] ;
                    //所以说， arr[0] --> arr[i] ,arr[1] -- arr[5] : arr[j]
                    if( arr[i] > arr[j]){
                        var temp = arr[i];
                        arr[i] = arr[j]    
                        arr[j] = temp;
                    }
                }
        
            }
        
        }
        ```

    ---

## 数组练习

   1. ```js
      随机给出一个五位以内的数，然后输出有多少位，并且每位分别是什么？
      var num = 12345;
      numCount(num);
      
      function numCount(num){
          var arr = new Array;
          while(num > 0){
              //任何数 % 10 都可以求到他的 个位数。
              arr.push(num % 10);
              // 把原数除以10 再取整数段。
              num = parseInt(num / 10);
          }
          document.write('一共有'+ arr.length+'位'+'</br>'+ '每位分别是' + arr.reverse());
      }
      
      另一种不用array的思路。
      // var num = 123456;
      // var count = 0;
      // while( num > 0){
      //     var res = num % 10;
      //     document.write('分别是' + res);
      //     num = parseInt(num / 10);
      //     count++;
          
      // }
      // document.write(count);
      ```

   2. ```js
      编写一个函数has (arr,60)判断数组中是否存在60这个元素。返回布尔类型。
      function has(arr,item){
          for(var i = 0; i < arr.length; i++){
              if(arr[i] === item){
                  return true;
              }
          }
          return false;
      }
      ```

   3. ```js
      写一个函数判断是否是质数还是合数（利用return的终止特性）
      function zhishu(num){
          for(var i = 2; i < num; i++){
              if(num % i == 0){
                  return 'heshi';
              }
          }
          return 'zhishu';
      }
      
      ```

   4. ```js
      实现一个条形码函数 ean().输入12位条形码，输出一个13位条形码
      例如： 一个12位 692223361219. Output是 6922233612192
      第13位算法是：
      求出前12位的 所有奇数位置上的和 
      求出前12位的 所有偶数位置上的和
      将奇数和 偶数和的三倍 相加得到x
      取x的个位数 为a
      用10减去a得到的数就是第13位数。
      
      function ean13(num){
          var numchain = num;
          var arr = new Array;
          // extract every number of the code into an array.
          while( num > 0){
              arr.unshift(num % 10);
              num = parseInt(num / 10);
          }
          // document.write(arr);
          // document.write('</br>');
          var arrOdd = new Array;
          var arrEven =new Array;
          for(var i = 0; i <arr.length; i++){
              if(i % 2 === 0){
                  arrEven.push(arr[i]);
              }else{
                  arrOdd.push(arr[i]);
              }
          }
               //document.write(arrEven);
               //document.write('</br>');
               //document.write(arrOdd);
               //document.write('</br>');
          var sumOdd = 0;
          var sumEven = 0;
          for(var j = 0; j < arrOdd.length;j++){
              sumOdd += arrOdd[j];
          }
          for(var k = 0; k < arrEven.length;k++){
              sumEven += arrEven[k];
          }
          //document.write(sumOdd);
          //document.write('</br>');
          //document.write(sumEven);
          //document.write('</br>');
          var num13 =  10 - ( ( sumEven + (sumOdd * 3) ) % 10);
          if(num13 == 10){
              num13 = 0;
          }
          var numchain = (numchain *10) + num13;
         // or we can do like this:
          // arr.push(num13);
          // var numchain = Number( arr.join() );
      
      
          return numchain;
      
      }
      
      ```

   5. ```js
      数组变回 数字
      var arr = [1,2,3];
      alert(Number(arr.join('')));
      //先 arr.join(''). 注意 不能写 join() ,一定要带('') 否则无法转换， 报错NaN.
      ```

   6. 

​    

---

##  ECMA5 严格模式

1. ```js
    function sum(){
    	"use strict";
    }
    一般这样用，而且不写在全局里，因为全局会引用很多外部js，不能保证外部js也遵循严格模式，会报很多外部js的错。
    ```

2. 效果：

    1. ```js
        不写var会报错。
        在普通模式下， 不写 var会将 变量强制为 全局变量。 但在 严格模式下，不允许不写var。
        function c(){
           num = 10;
        }
        alert(num);
        // 10;
        
        但是严格模式下：
        function sum(){
           'use strict';
            num = 10;
        }
        alert(num);
        // 报错，num 为申明。not defined.
        ```

    2. ```js
        严格模式下，不允许出现重复命名的参数：
        show(10,20,30);
        function show(num1,num1,num2){
          alert(num1, num2;)
          //20,30 因为10被后面的20覆盖了。
        }
        
        function show(num1,num1,num2){
          'use strict';
          alert(num1, num2;)
        }
        // 直接报错，说 num1重复。
        ```

    3. ```js
        arguments对象只能用来索引 参数。
        
        show(10,20);
        
        function show(num1,num2){
          num1 = 30;
          alert(num1);
          alert( arguments[0]);
        }
        // 30
        // 30
        //在 非严格模式下，num1和 arugments[0]是一回事。
          
        function show(num1,num2){
          'use strict';
           num1 = 30;
          alert(num1);
          alert( arguments[0]);
        }
        //30
        //10
        //在 use strict模式下， arugments[0]只反应输入的参数影响，不受后续变化赋值影响。
        
        ```

    4. 

    5. ```js
        严格模式下，新增了下列保留字。 这些字不可以给变量取名。
        implements
        interface
        let
        package
        private
        protected
        public
        static
        yield
        ```

    ----

## ECMA5新增的array.方法()

   1. ```js
      array.indexOf()
      格式：array.indexOf(item, start);
      参数：items任意数组 ； start开始查找的起始位置下标(optional)。可以不写，不写的话默认是0.也就是从第一位开始
      功能：在数组中 查找*第一次*出现items元素的下标，从arry[start]开始查找
      返回值： -1 没有找到。  >=0 查找到的*第一个*元素下标
      例子：
      var arr = [10,20,30,40,20];
      var index = arr.indexOf(20);
      // 1
      var index = arr.indexOf(20,2);
      // 4
      
      var index = arr.indexOf(120,1);
      // -1
      
      
      ```

   2. ```js
      forEach()遍历
      格式： array.forEach(function(value,index,arr){
      
      });
      功能： 就是遍历和for loop一样。
      这里 forEach( ) 里面填的是叫一个 callFunction的东西。别人填的参数是一个数，但是他填的是一个function。
      
      Current Value (required) - The value of the current array element
      Index (optional) - The current element's index number
      Array (optional) - The array object to which the current element belongs
      
      其中： value是 必须的。
            index 和 arr是选填的。
      
      例子：
      var arr = [10 ,20 ,30];
      arr.forEach(function(value,index,arr){
        document.write(value + ',' +index+ ','+arr);
      	//就是循环遍历arr
        //然后每次根据数组元素个数调用多少次Callfunction，这里就是三次。
        //每次调用 都会返回一个value，一个index，一个arr，当然如果你不填就不会返回该值。
        //第一次就输出 10，0，【10，20，30】
        //第二次就输出 20，1，【10，20，30】
        //第三次就输出 30，2，【10，20，30】
      });      
      
      ************************************************
      ************************************************
      ************************************************
        
      说白了 你写
      arr.forEach(function(items, index,arr){
        XXX;
        //items其实就是 arr[index] 或者说arr[i];
        //index其实就是 i
        //arr就是arr
      }
                  
      和你写：
                  
      for(var i = 0; i < arr.length ; i++{
                  XX;
                  
                  }
      
      以及:
      for (var i in arr){
        XX;
      }
      
      //这个里面 XX的内容是 没有区别的；
      //正常用就行。
      ```

   3. ```js
      map映射：
      格式：arr.map(function(items,index,value){  return xxx； } );参数也是一个function,但是和forEach相比他多了return 值。
      功能: 遍历之后映射。
      例子：
      var arr = [1,2,3];
      arr.map(function ( value, index, arr){
        //遍历要做的事情。和for each一样 ,也可以不写。
        return value * 1.3;  //所有值 变成1.3倍。
      })
      
      注意事项：
      这个arr.map()和 arr.slice()一样，和 arr.splice()/push()不一样！ 他不改变原数组。
      返回值是一个新数组。
      var arr1 = [1,2,3];
      var arr2 = arr1.map(function(value, index, arr){
        return value * 2;
      })
      alert(arr1);
      //[1,2,3] 原数组无变化；
      alert(arr2);
      //[2,4,6] 变成2倍；
      ```

   4. ```js
      filter过滤
      格式：arr.filter(function(value,index,arr){
         // xxxx;
         return 过滤条件；
      });
      功能： 返回一个经过过滤的新数组， 并且原数组不变化。
      例子：
      var arr1 = [1,2,3,4,5];
      var arr2 = arr1.filter(function(value,index,arr){
        //xxx;
        return value > 3;
      })
      alert(arr1);
      // [1,2,3,4,5]不变化；
      alert(arr2);
      // [4,5];
      
      ```

   5. ```js
      some 在数组中查找是否有符合条件的，如果有，返回true，没有返回false
      格式：arr.some(function(value,index,arr){
         // xxxx;
         return 过滤条件；
      });
      功能：在数组中查找是否有符合条件的，如果有，返回true，没有返回false。原数组不变化。
      例子：
      var arr1 = [1,2,3,4,5];
      var arr2 = arr1.some(function(value,index,arr){
        //xxx;
        return value > 3;
      })
      alert(arr1);
      // [1,2,3,4,5]不变化；
      alert(arr2);
      // true;
      
      //注意事项：
      这是一个shortout短路操作，就是只要找到一个符合条件的，就返回 true。有点像默认return false那种if else里面return true的判断语句。
      ```

   6. ```js
      every 在数组中查找是否*所有*都符合条件的，如果是，返回true，如果不是返回false
      格式：arr.every(function(value,index,arr){
         // xxxx;
         return 过滤条件；
      });
      功能：在数组中查找是否*所有*都符合条件的，如果是，返回true，如果不是返回false。原数组不变化。
      例子：
      var arr1 = [1,2,3,4,5];
      var arr2 = arr1.every(function(value,index,arr){
        //xxx;
        return value > 3;
      })
      alert(arr1);
      // [1,2,3,4,5]不变化；
      alert(arr2);
      // false;
      
      //注意事项：
      这也是一个shortout短路操作，就是只要找到一个*不*符合条件的，就返回 false。有点像默认return true那种if else判断语句里面 return false那种结构。
      ```

   7. ```js
      reduce 归并。
      功能：每次循环把[i] 和 [i+1] 两个数加起来；
      返回值： 最终返回的肯定是 数组所有之和。
      格式： arr.reduce(function(prev,nex,index,arr){
        
        return prev + next;
      })
      // prev第一次记录 是 下标为0的元素，也就是数组里面第一个元素
      // 第二次开始，上一次遍历return的值
      // next 从上标1开始，当前遍历到的元素
      //arr数组本身
      
      var arr=[1,2,3，4，5]
      var res =  arr.reduce(function(prev,next,index,arr){
        alert(prev+ ' +'+ next);
        //每次循环打印的prev 和 next的值分别为：
        // 1 , 2  。。。第一次 不做加法，直接就是打印第一位和第二位。
        //1+2=3 and 3 。。。。第二次
        //3+3=6 and 4 。。。。第三次
        //6+4=10   and 5 。。。。第四次
        
        return  prev+next;
      });
      alert(res);
      // 15; 就是sum();
      ```

   8. 

----

## alert()\*doc.write()\*console.log



```js
首先，无论用哪个，记住：
不能用逗号分隔，那是function demo(arg1,arg2)..
参数采用逗号分隔。

alert();
doucment.write();
console.log();
//他们要展示2个变量，一定要用 a + '+' +b;
//因为是字符串拼接，你召唤一个 ‘+’，就可以把a，b都变成字符串，加号就是字符串拼接的标志。
//如果你不写+，那就变成了a+b的值了，所以你要写成 a+'+'+b.才行。
```



小区别：

```js
你如果要在三者里面分别展示：
a     b
这种效果的时候，是不一样的，也就是 a和b中间有一段空白。而不是+号之类的。
那么alert 和console.log 是不能写 &nbsp； </br>这样的，因为这些只能在 docment.write里面识别出来。
//他们直接写 a + ‘     ’+b，用键盘打空格就行。相反document.write就不行，因为html对空格个数不敏感。
var a= 10;
var b =20;
alert(a +'     '+ b);  // a    b
document.write(a +'     '+ b);// a b
console.log(a +'   '+ b);// a    b
****************
var a= 10;
var b =20;
alert(a +' </br> '+ b);  // a  </br>    b
document.write(a +' </br>'+ b);// a 
															//  b
console.log(a +'</br>  '+ b);// a </br>    b
```

----

## NaN == NaN 为false，NaN != NaN为true.

```js
 var haha = (NaN != NaN);
    document.write(haha);
// true;

 var haha = (NaN == NaN);
    document.write(haha);
// false;

//特别诡异，一定要注意。
```



```js
有一个如下需求，判断数组中的数是否全部为 数字。


我错误的方法：
    var arr=[1,2,3,'ww'];
    var res = arr.every(function(value,index,arr){
        document.write(Number(value) + '</br>');
        return Number(value) != NaN;
      //return isNaN(value) == false; isNaN为false，不是一个number为假，那就是一个number。判断结果return false。
      
      //其实every（）什么的都没问题，关键是这一步return的判断 错了。
      //你如果判断 所有Number(value)都不等于NaN的话。表面上意思是对的， every value都不等于 NaN,那不等于	NaN，肯定就是个number。
      //但是其实是错的， 因为 存在 NaN != NaN 也为true，所以就导致 全部都为true。arr.every()判断完结果为true，这显然不对。
    });
    alert(res);

正确做法一：
用 isNaN(Number)来判断,注意 isNaN的意思 不是数字。。
缺点： '3' 会判断成 false，他虽然是string，但是还是纯数字。
			'NaN'会判断成 true， 因为NaN肯定不是一个number
      null 会判断称 false，因为null是一个number
所以，这只是一个纯粹的用来check数组元素是不是 【纯数字】的方法

Number.isNaN(NaN);        // true
Number.isNaN(Number.NaN); // true
Number.isNaN(0 / 0);      // true
isNaN('2005/12/12') //true

// e.g. these would have been true with global isNaN()
Number.isNaN('NaN');      // false
Number.isNaN(undefined);  // false
Number.isNaN({});         // false
Number.isNaN('blabla');   // false

// These all return false
Number.isNaN(true);
Number.isNaN(null);
Number.isNaN(37);
Number.isNaN('37');
Number.isNaN('37.37');
Number.isNaN('');
Number.isNaN(' ');

正确做法二： 用正则表达式判断。

```



----

## 字符串

1. 带引号的都是字符串

2. ```js
    字符串的拼接：
        var a =100;
        alert(a + 100);
      // 200 没有字符串，所以就是数字相加
        alert(a + ' '+ 100);
     //100 100 ，有字符串，变成拼接
        alert(a + '100');
    // 100100 ，有字符串，变成拼接
    ```

    

3. 三种申明方式：

    1. new

        ```js
        var str1 = new String(100);
        //有点像 new Array
        alert(str1 + 20);
        // +号 是字符串拼接，所以结果显示为 10020
        ```

        

    2. 不带new

        ```js
        var str1 = String(100);
        //有点像  Array
        alert(str1 + 20);
        // +号 是字符串拼接，所以结果显示为 10020
        ```

        

    3. 直接赋值

        ```js
        var str1 = '100';
        alert(str1 + 20);
        // +号 是字符串拼接，所以结果显示为 10020
        ```

4. 字符串的一些方法：

    1. ```js
        字符串.length 
        功能： 访问字符串中 字符的个数。
        注意： 编码格式不管是 gbk还是utf-8，汉字都算一个 字符。
        比如  var str1 = '号'；
              str1.length = 1;
        ```

    2. ```js
        字符串.charAt(index);  或者 字符串[index];
         --> index从0开始。
         功能： 访问字符串中 第index位置上的单个字符。
         比如  var str1 = ' hello'；
              str1.charAt(4);
        			str1[4];
        			//两种表达方式。
        
        
        ....
        //但是要注意， string类型的字符串 是只读的，一旦被申明，就无法被修改。
        也就是说，比如 你想把 hello的 o变成 x。
        你不可以写： str1[4] ='x';
        这是错误的，没有效果。
        如果非要改变，只能将原来的字符串销毁，然后重新赋值成新字符串。
        ```

    3. ```js
        字符串中的字符也可以loop循环遍历
        var str1 = 'hellowcoaonima1123';
        for (var i =0 ; i < str1.length ; i ++){
          document.write(str[i]+ '</br>');
        }
        
        ```

    4. ```js
        字符串 是**只读数据类型**。
        在JS中没有**只读数据类型**这个概念，所以 字符串他又是**基本数据类型***，又是**引用数据类型***
        所以，你在typeof一个string的时候就会出现：
        
        var arr =[1,2,3];
        alert(typeof(arr));
        //object 引用数据类型的type是object
        //也就是说，你如果 arr1= arr2,然后更改arr1的话，arr2也会发生变化，因为他们指向 堆结构里面的一个地址。
        var str1 = new String(hello);
        typeof(str1);
        //object --引用数据类型
        var str2 = String(hello);
        typeof(str2);
        //string --基本数据类型
        var str3 ='hello';
        typeof(str3);
        //string ---基本数据类型
        
        
        why?
          为什么一会儿是引用数据类型，一会儿又是基本数据类型。
        那是因为 其实内存区域 分为三块：   程序运行段  |  堆 | 只读数据段
        
        程序允许段  存各种基本数据类型比如数字 var a =1以及 存var arr的地址，以及 var str的地址。
        而且存的内容是不会临时变化的， 要变化只能重新赋值。比如 我想让1变成2，那就重新赋值 var a= 2;
        堆 就是来存数组的， 因为数组长度不确定，会随时变化。
        只读数据段： 就是用来存 string的，因为string是只读的。
        var str1 = 'hello';
        var str2 = str1;
        //str2 也是hello了。
        //但是 因为是引用数据类型，其实 str2 和 str1都指向一个 只读数据段的 一个地址编码
        //也就是说
        var str2[4]='x';
        //没效果
        var str1[3]='x';
        //没效果
        但是我如果再写一个 var str2 ='www';
        str2就相当于重新赋值了，又和 基本数据类型的性质很像。
        
        
        总结：
        和array一样，不能用 var str1= str2这种。
        另外，也没法 更改str的内容。
        如果要改， str.concat() //拼接成新的
        					str.replace( ) //替换 并生成新的
        					str.split('') ==> arr.join('') //转换，并生成新的 
        ```

    5. ```js
        charCodeAt( index)
        格式： 字符串.charCodeAt(index);
        功能： 对应下表字符的ASCII码值
        var str = 'hdle';
        str.charCodeAt(1);
        //返回 'd'这个字符的 ASCII码值。
        ```
```
        
    6. ```js
        String.fromCharCode(  ASCII, ASCII.....);
        功能： 将传入的ASCII码值转成对应的字符
        返回值：组成的字符串。
        
        例子:
        var str = String.fromCharCode(97,98,99,100);
        alert(str);
        //abcd
        
```

    7. ```js
        indexOf()
        格式： str.indexOf(value， start）;
        功能： 查找value在这个str中第一次出现的位置。
        参数： 第一个参数就是要查找的字符串，第二个是 起始的index，很像array.indexOf
        不写start，默认从0来时。
         返回值： -1 没有查找到
                 不是-1， 第一个查找到的index
                        
        例子：
           var supStr = 'abcabcabc';
           var subStr = 'abc';
           var index = supStr.indexOf(substr,1);
    ```
    
    8. ```js
        lastIndexOf()
        格式：Supstr.lastIndexOf( substr);
        //只有一个参数哦
        功能：在supStr中查找 最后一次出现 sUbstr的位置。
        返回值： -1没有找到
        
          var supStr = 'abcabcabc';
           var subStr = 'abc';
           var index = supStr.lastIndexOf(substr);
        // 6 也就是最后一个ABC的a所在位置。
    ```
    
    9. ```js
        search( )
        格式： supStr.search(subStr);
        //只有一个参数哦、
        返回值： -1没有找到
        功能: 在sup查找第一次出现substr的位置，但是和indexof相比，不能指定start的位置！一定是从0开始查找，但是好处是 可以使用 正则表达式。
        而且最大的差别是：
        search( subStr / 正则表达式)
        比如 i-忽略大小写， g 全局匹配
    比如 我想 找出 abc或者 ABC。。。那就是 写 /abc/i
    ```


​    
​        
​    10. ---



##  更多字符串相关的方法

1. ```js
    str.substring( ) // == str.slice( ) 
    格式： string.substring(start , end ) ;
      和 str.slice( )是一样的、
    功能： 将字符串中[start,end)部分的字符串提取出来
    参数:  start ,end左开右闭。 取不到end
    返回值： 生成新的字符串。。 原先字符串不变（肯定不变，因为是只读数据类型）
    例子：
    var str = 'hello';
    var newstr = str.substring(1,4);
    alert(str);
    // hello
    alert(newstr);
    // ell
    ```

2. ```js
    str.substr( )
    格式： string.substr(start , length );
    功能：将字符串中start开始，length长度的部分的字符串提取出来
    参数:start起始位置，length截取长度
    返回值：生成新的字符串。。 原先字符串不变（肯定不变，因为是只读数据类型）
    例子：
    var str = 'hello';
    var newstr = str.substr(1,4);
    alert(str);
    // hello
    alert(newstr);
    // ello
    ```

3. ```js
    replace( )
    格式： Str.replace(oldStr,newStr);
    功能： 把原先在 str里的 出现的第一个 oldstr 替换成 newStr，并且生成一个新的字符串
    参数: oldstr 在str里面。 newstr替换oldstr；
    //但是要注意， 如果oldstr是字符串的话，他只能替换第一个出现的oldstr，如果你要替换全部的oldstr的话，要用正则表达式。
    返回值：替换成的新字符串。
    例子：
    var str = ' how are you';
    var newStr = str.replace(are, old are);
    alert(str);
    //how are you 不变，因为是 只读
    alert(newStr);
    // how old are you 替换成功并且生成。
    
    但是如果 var str =' how are are are you'
    而你想替换 var newStr = str.replace('are' ,'old are'）的话就不行，因为他只会替换第一个are，这时就需要用正则表达式。
                                   
     var newStr = str.replace( /are/g , 'old are' );
     全局匹配所有are
     再比如你要 你要把 所有 aRe 替换成 are。
     你可以写：
     var newStr = str.replace( /are/ig, 'old are');
    ```

4. ```js
    str.split( )
    格式： str.split(分隔符 ， length)
    功能：用分隔符对原字符串进行分割，将分割完的字符串放在一个数组里
    参数: 第一个参数，用这个分隔符 对原字符串进行分割。 第二个参数，（一般不用），控制返回的数组的元素的个数。一般不写的。
    返回值： 返回一个数组
    例子：
    var str =' how are you';
    var arr = str.split('');
    alert(arr);
    //[how,are,you]
    alert(str);
    // 不变 how are you
    
    //注意事项：
    1、 相邻的两个分隔符，中间会产生于一个空字符串。
    比如你多打了一个空格，
    var str =' how【空格】【空格】 are you';
    var arr = str.split('');
    alert(arr);
    //这里就会变成
    //[how, , ,are,you]
    alert(str);
    // 不变 how are you
    2、 分隔符 split('') 和 split (' ')，一个带空格，一个不带空格是有区别的。
    	--> 带’空格‘的split，意思是按照 空格划分，也就是划分单词
      --> 不带空格的’‘的split，是把每一个单独的字符全部分出来，包括空格，所以'how are you'如果是split(''),就会变成 [ ,h,o,w, ,a,r,e, ,y,o,u].
    
    ```

5. ```js
    str.toLowerCase( )
    str.toLowerCase( )
    //这个方法也可以用在 arr[i]中。将数组元素转为小写或者大写。
    格式： str.toLowerCase( )
    			str.toLowerCase( )
    功能： 全部转成全小写 全大写
    参数: 不用写参数
    返回值：生成的新数组。
    例子：
    ```

6. ```js
    str.concat( )
    // str1+ 'world' 一样的效果
    格式： str.concat( )
    // str1+ 'world' 一样的效果
    功能： 字符串拼接
    参数: 任意个，相当于+
    返回值：生成的新字符串，老的不变
    例子：
    var str1 = 'hello';
    var str2 = str1.concat('world',100);
    alert(str1);
    //hello
    alert(str2);
    //helloworld100
    ```

7. ```js
    数组 变成 字符串：
        	  var arr = [1,2,3];
            var res = arr.join(',');  
            alert(arr);
    // 1,2,3
            alert(res); 
    // 1,2,3
            alert(typeof(res));
    //string 样子一样，但是其实数据类型不一样。
    
    				var res = arr.join('');  
    				alert(res);
    				//123
    字符串 变成 数组：
    
     var str = '123';
     var arr = str,split('');
    alert(arr);
    //[1,2,3]
    ```

8. 

9. ```js
    字符串相关练习:
    1.  将字符串  str = 'When i was young ,I love a girl in neighoubr class'中 提取yong 到girl 生成新字符串，但是不准count。
    var str = 'When i was young ,I love a girl in neighoubr class';
    var start =str.indexOf('young');
    var end = str.indexOf('girl') + 'girl'.length;
    //但是这个应付不了 girl如果出现一个 在 young前面的情况。
    var newStr =str.substring(start,end);
    alert(newStr)
    
    2.将字符串中的单词用空格分开
    已知传入的字符串只有字母，每个单词的首字母大写。现在要求把每个单词用空格隔开，只保留一个单词的首字母大写。
    Input : HelloMyWorld
    Output: Hello my world
    
    
    function wordTransfer(str){
        //Input->  HelloMyWorld
        //Output-> Hello my world
        var arr = str.split('');
        arr[0] = arr[0].toUpperCase();
        // alert(arr);
        for(var i = 1;  i < arr.length;i++){
            if (arr[i] >= 'A' && arr[i]  <= 'Z'){
                arr[i] = arr[i].toLowerCase();
                arr.splice(i,0,' ');
            }
        }
        //alert(arr);
        var newStr = arr.join('');
    
        //alert(newStr);
       return newStr;
    }
    var res = wordTransfer('helloMyWorld')
    document.write(res);
    
    ```

10. ```js
    字符串练习：
    
    短信验证码： 随机生成一个n位的由0-9数字组成的短信验证码。
    function NumberCode(n){
        // parameter n is the digital numbers of the verifcation code;
        // input : 6 
        // output : 564561  / 554897 / ....
        // most used in SMS verify
        var arr = new Array(n);
        for(var i = 0; i < arr.length;i++){
            var temp = parseInt(10 * Math.random());
            arr[i] = temp;
        }
        var str = arr.join('');
        return str;
    }
    
    alert(NumberCode(6));
    
    
    随机验证码生成： 随机生成一个n位的由a-z和A-Z以及0-9组成的验证码。
    
    function verifyCode(n){
        // parameter n is the digital numbers of the verifcation code;
        // input : 6 
        // output : 5A4c6z  / 5w4R9q / ....
       // a - z ASCII  65 - 90
       // A - Z ASCII  97 - 122
       // 0 - 9  ASCII 0 - 9
       var arr = new Array(n);
       for(var i = 0 ; i < n; i++){
           var temp =  parseInt((Math.random() * 123));
           if(temp >= 0 && temp <= 9){
               arr[i] = temp;
           }else if(temp <= 90 && temp >= 65){
               arr[i] = String.fromCharCode(temp);
           }else if(temp >= 97 && temp <= 122){
               arr[i] = String.fromCharCode(temp);
           }else{
               i = i - 1;
               //i--;
               //omit this time, i goes back to last value, restart this time's pick.
           }
       }
    //    alert(arr);
       var str = arr.join('');
       return str;
    }
    
    alert(verifyCode(6));
    ```

11. ```html
    DOM操作 配合 验证码功能：
    点击button，展示随机的验证码。
    
    <body>
      <div id = 'div1'>
        123456
      </div>
      <button onclick = 'verif()'>
        click me
      </button>
    </body>
    ```

    ```js
    //事件驱动函数。
    // <button onclick = 'verif()'>
    //   click me
    //</button>
    // 点击button 就会执行 onclick里面字符串的 代码，注意是字符串，要带引号。
    
    
    verif(){
      //在script的js文件中，拿到 html文件中的拿到div标签
      // 用document.getElementByID(id)
      //通过 这个id查找 锁定到该id
      var temp = doucment.getElementByID('div1');
      // 如果输出temp的话，是 [object  HTMLDivElement]
      那拿到标签了之后，怎么改变div内的内容呢？
      // 通过node.innerHTML获取
      //比如我想获取上面的123456
      // ** 看下面的注意点3.
      那就 
      alert(temp.innerHTML)  --> 123456;
      
      或者 // ** 看下面的注意点3.
      你写 var res = temp.innerHTML;
      然后 alert(res)； 也可以
      
      但是后面，你想改变内容的话，那就只能改变：
      temp.innerHTML = 'change this data plz';
      同理，如果想通过函数改变的话，那就：
      temp.innerHTML = testCode(6);
      //不可以改变 var res，原因看 下面的注意点3。
    }
    
    //最后再通过改变css样式。把验证码改为奇奇怪怪的font和样式。
    
    ********************
    ****注意点1 ：*******
    ********************
    onclick('');
    document.getElementByID('');
    这后面都要写 ''， 不能直接写变量名字的。
    
    ********************
    ****注意点2 ：*******
    ********************
    不能直接在 script标签里面写  事件驱动函数。
    比如
    <script>
    var temp = document.getElementById('div1');
    alert(temp);
    </script>
    你这么写，temp是取不到值的。
    也就是说 事件驱动函数，必须放在一个function里面来驱动。比如 button的 onclick= ’ function(_);‘
    然后再在js文件里面调用。
    
    
    ********************
    ****注意点3 ：*******
    ********************
    https://stackoverflow.com/questions/8196240/setting-innerhtml-why-wont-it-update-the-dom
    
    为什么不能写 var temp = oo.innerHTML;
    但是可以写  var oo = document.getElementById('div');
    且 更改内容时候，写的是 document.getElementById('div').innerHTML = 'xxx ';或者var temp= document.getElementById('') 然后 temp.InnerHTML = 'sss';
    
    说白了就是， innerHTML赋值只能写在左边。 直接 = 赋值就行。
    
    看如下代码：
     function btnClick(){
            var  oDiv = document.getElementById('div1');
            var  temp = oDiv.innerHTML;
            alert(temp);
       			// 首先要更新一个观念，就是node.innerHTML是一个变量，就行var a， var b一样，你取他的时候虽然有值，但也是赋上去的。所以你 var temp = o.innerHTML  就相当于在做 var a = b的操作，也就是把 o.innerHTML当前的值赋给temp，所以此时 alert（temp） 输出为 本来在div里就存在的值也就是上题中的123456
            oDiv.innerHTML='sss';
       // 此时，你改变了innerHTML变量的值，那innerHTML的值就从123456变成了sss
       //但是 temp的值没有发生任何变化，因为他两都是简单数据类型，又不是array那种一改全改的。
       //所以
            alert(temp);
       // 123456
            alert(oDiv.innerHTML);
       ///sss
        }
    
    *********************
      一行解决：
     function btnClick(){
       
           document.getElementById('div1').innerHTML = verifyCode(6);
    
        }
    ```

    

12. ```js
     字符串练习：
     将字符串 按照单词进行逆序，空格作为划分单词的唯一条件。
     input : Welcome  to Beijing
     Output : Beijing to Welcome
     
     function reverseStr(str){
         var arr =  str.split(' ');
         //[welcome,to,beijing]
         var newArr  = arr.reverse();
         //[beijing,to,welcome]
         var newStr = newArr.join(' ');
         return newStr;
     }
     
     alert(reverseStr('welcome to beijing'));
    ```

13. ```js
     字符串练习：
     input： 一个数组，起始元素和个数 都未知
     outout： 一个新生成的数组，由原数组的元素正序反序拼接而成。
     e.g.
     input : [one, two, three]
     output: [one , two, three, three, two ,one]
     
     function duplicateArr(arr){
         var arr1 = arr.concat().reverse();
         var newArr = arr.concat(arr1);
         return newArr;
       //这题就是考察 array引用数据类型的 性质。
     }
     
     alert(duplicateArr(['one','two','three']));
    ```

14. ```js
     字符串练习：
     已知一个字符串对象中，英语单词用各种非字母字符分隔，统计单词个数。
     input: "Yes, she*is&my@love"
     output: 5
     
     //规律： 当前面一个字符是字母，而后面一个字符是非字母时候，前面就会有一个单词。
     
     function isWord(str){
       if(str >= 'a' && str <= 'z' || str >= 'A' && str <= 'Z' ){
          return true;
          }
       
       return false;
     }
     
     function countWordNumber(str){
       var count = 0;
       for(var i = 0 ; i <  str.length -1 ; i++){
         if(isWord(str[i] && !isWord(str[i+1])  ){
            count++;
            }
       
       return count;
     }
     alert(countWordNumber('"Yes, she*is&my@love"'));
    ```

15. ```js
     字符串练习：
     实现一个函数，查找子串出现的次数，返回字符串str中出现substring的次数。
     input: 'abcabcabc' , 'abc'
     output: 3
     
     //规律：  用 split 分隔 substring，得到的数组由空白组成，数组的个数-1，就是substring的个数。(因为第一个匹配的abc开头 和 最后一个匹配的abc末尾的空格也算)
     split(''):
     			1个abc，分成a,b,c 三个， split出来数组长度为3，那有几个''呢？数一下，是4个。
     split('abc')
            1个abc   2个空（也就是arr长度）
            2个abc   3个空
            3个abc   4个空
            n个abc   n+1个空
            所以 n个abc  = arr.length - 1
     //       求index 用 indexof和 search
     function countSubStr(supStr,subStr){
         //input abcabcabc  abc
         //output 3
         var arr = supStr.split(subStr);
         // alert(arr);
         return arr.length - 1;
     }
     
     alert(countSubStr('abcabcabcabca1bc2abc','abc'));
    ```

16. ```js
     字符串练习：
     已知用户名只能有数字字母下划线组成，判断邮箱是否符合格式。
     e.g.  1212_fxy@gmail.com true
     			$sada@gmail.com false
     			dnadas@gasasa.comp false
     
     function mailCheck(str){
         // fxy456_0_654@gmail.com
         var index = str.indexOf('@');
         // alert(index);
         //4 
         if(index == -1){
             return false;
         }
         var endStr = str.substring(str.length-4 ,str.length);
         // alert(endStr);
         if(endStr != '.com'){
         return false;
         }
     
         var startStr = str.substring(0, index);
         for( i = 0 ; i < startStr.length; i++){
             if ( containIllegalChar(startStr[i])){
                 return false;
             }
             }
         return true;
         }
     
     
     function containIllegalChar(str){
         if( str <= 'Z' && str >= 'A' || str <='z' && str >= 'a' || str <=9 && str >= 0 || str == '_'){
             return false;
         }
         return true;
     }
     //小bug： 无法判断 fxy@4560654@gmail.com 是否合法。
     //做法： 做一个count，count在str里面'@'的个数，不等于1的都为false。
     //然后 @所在的index之前判断是否是合法字符。  从@的index往后，到 .com的index 再判断一次。也就是 到 arr[str.length-4]这一位。
     //最后判断最后四位 是不是.com就可以了。
     
     
     alert(mailCheck('sadadasdasdasdasda.com')); //false
     alert(mailCheck('ssdsada@gmail.comp')); //false
     alert(mailCheck('$sada@gmail.com'));//false
     alert(mailCheck('sada@gmail.com'));//true
     
     //这里我想额外谈一谈 if 和if-else的区别。
     if( 条件 ){
       
     }
     if( 条件 ){
       
     }
     这样写的话，两个if没有互补的关系，他们判断的 样本总量互不影响，比如都是数组。
     
     但是如果写：
     if( tiaojian ){
       
     }else{
     	exe2;  
     }
     这里的exe2其实是 规避了tiaojian里的情况，也就是说， 是tiaojian的反方向，比如tiaojian是大于1，这里就是 小于等于1才执行。 如果exe都是return，从判断数量上来说，要比上面一个if一个if要节约时间，因为第一个判断不过，我就return终止function了不会再运行下去，而第一种一定要每个都跑完才行。
     
     再例如：
     
     function show(b){
         if( b > 0){
             alert('worinima');
         }else if( b > 1){
             alert('hahahaha');
         }
     }
     
     show(8);
     // wornima
     不会走下面一个else if，因为else if的意思是 否则+如果， else if所判断的样本容量只有 b <= 0那一块，是永远取不到 b>1的，所以永远走不到alert('hahahaha');
     
    ```

17. ```js
     敏感词屏蔽功能：
     达到效果： 在输入框中输入一串字，点击提交后，显示在下方的聊天框中，并且输入框的字消失。聊天框中显示刚刚发送的内容，但是屏蔽掉了 敏感词。
     
     function clearContext(){
         alert('your mom  has been clean');
         document.getElementById('inputTxt').value ='';
     }
     
     function submitContext(){
         var tranTxt = document.getElementById('inputTxt').value;
         var arr = [/wocao/ig,/nimabi/ig,/wori/ig];
         for(var i = 0; i < arr.length;i++){
             tranTxt = tranTxt.replace(arr[i],'*');
         }
         
            document.getElementById('chatBox').innerHTML =  document.getElementById('chatBox').innerHTML + tranTxt;
     
         document.getElementById('inputTxt').value = '';
     }
    ```

     ```html
     <body>
       <body>
         <br>
         <div id="chatBox"></div>
         <div class="chatBoxBtn">
         <textarea name="" id="inputTxt" cols="30" rows="10"></textarea>
         <button onclick="clearContext();">clear</button>
         <button onclick="submitContext();">submit</button>
         </div>
     
     </body>
     ```

     

18. ```html
     用户名注册验证：
     1.必须只能由数字，字母，下划线组成
     2.长度不能超过6-18
     3.首字母不可以是数字
     html + css + js
     
       <div class="register">
             <div class="username">
                 <span>Username</span>
                 <input type="text" id="usernameInput" onblur="usernameCheck();" placeholder="input your username">
                 <span id="usernameCheckInfo">Must be 6 -18 chars and the first char can not be a number ， can only contain 0-9,a-Z,'_' </span>
             </div>
             <div class="password">
                 <span>Password</span>
                 <input type="text">
                 <span>12211</span>
             </div>
         </div>
     
     
     
    ```

     ```css
     .register{
         width: 200px;
         height: 300px;
         background-color: cadetblue;
         margin: 0 auto;
         border: 1px solid black;
         overflow: hidden;
     }
     
     .register .username{
       
        margin: 0 auto;
        margin: 50px 20px 50px 20px;
     }
     .register .username input{
         width: 100%;
         display: block;
     }
     .register .username span{
         display: block;
         width: 100%;
         font-size: 14px;
     }
     
     .register .password{
         
         margin: 0 auto;
         margin: 50px 20px 50px 20px;
     }
     .register .password input{
         display: block;
         width: 100%;
     }
     .register .password span{
         display: block;
         width: 100%;
         font-size: 14px;
     
     }
     ```

     ```js
     function usernameCheck(){
         var str = document.getElementById('usernameInput').value;
         if(str.length > 18 ||  str.length < 6){
             document.getElementById('usernameCheckInfo').innerHTML = 'length must be 8-18';
         }else if(str[0] <= '9' && str[0] >= '0'){
             document.getElementById('usernameCheckInfo').innerHTML = 'the first letter can not be a number';
         }else  if(containIllegalChar(str)){
             document.getElementById('usernameCheckInfo').innerHTML = 'can only contain 0-9 a-Z and _';
           //containIllegalChar use a str loop to check every char in the str if contain a unwanted char.
           // for (var i in str){
           // if containIllegal(str[i])
           // return true
         }
         }else{
             document.getElementById('usernameCheckInfo').innerHTML = 'congrats, you can use this username';
         }
     }
     ```

     ```js
     总结：
     1.onblur： 失去焦点， 又一个事件驱动函数，
     2. input/textarea这种标签的都是 .value
     3. span/div内直接写内容的这些，都是.innerHTML
     4.但是他们都是一个变量，而不是一个值，注意赋值左右顺序。
     5.else if里面写的是  报错的条件， 而不是 不报错的条件。全程else if下来，用 input里的内容做验证，进而改变span里面的内容。
     
     6. document.getElementById 这是一个地址。所以 var var = document.getElementById ('ss')得到的是一个地址，所以可以用var.value或者 document.getElementById.value是一样的效果。类似于引用数据类型,他们指向同一个地址。 但是 var.value是一个变量。你用  var temp = var.value，然后更改temp不会改变var.value。
     ```

     



---

## Object对象

1. 面向过程编程：只考虑抽离实体后的数学逻辑。

2. 面向对象编程：考虑其生活逻辑。

    1. 每个实体都是一个对象。
    2. 每个对象都有 属性，方法。
    3. 用面向对象的思想考虑问题，设计逻辑。

3. 面向对象的语法。

    1. 类：

        > ​	一种人为制造的抽象的相同事物特征的一类东西

    2. 对象

        > ​	某个类下面，**唯一**的 特殊的一个实例子。
        >
        >  狗 是一个类，但是你路上遇到那个是一个特殊的 对象实例。

4. ECMA6之前的 对象的语法

    ```js
    1.申明对象。
     (1).通过new 运算符
     		var obj1 = new Object(); 
     		//注意 ( )不能写东西。
     (2).省略new 运算符
     		var obj2 = Object( );
     (3).对象常量赋值 
     		var obj3 = { };
    
    2. 给对象新增属性。
      obj3.username = 'worinima';
      obj2.age = '18';
    // attribute和变量 使用起来没有什么区别。用法没区别。
    // 但是， attribute必须署名在一个object后面使用，和变量名一样，名字是固定的，但是值可以重新修改或者复制。
    // 属性值可以变，但是属性名是不会变的。
    
     方法二：
     你可以写成这样： 
     obj['username'] = 'haha';
     obj['age'] = '18';
    //注意，用[]这种方法写属性的话，属性名字要加‘’.
    
    3.给对象新增方法。
     //使用起来和函数一样。用法一样。
    // 唯一的区别就是， 方法必须署名在一个object后面使用。但是方法名是顶死的。
    
    3.1申明方法。
    
    var obj = new Object;
    obj.show = function(){
      obj.username =' 18';
    }
    
    3.2调用方法。
    
    obj.show();
    
     方法二：
     你可以写成这样： 
     var obj = {};
     obj['show'] = function (){
       xxx;
     }
     obj['show']();
    //注意，用[]这种方法写方法名的话，要加‘’.
    
    方法三：
    var obj = {};
    //原先的。
    
    var  obj = {
      'username' : 'ss',
      age : 'what',
      clickOnBtn : function (){
        alert('s');
      }
    };
    
    
    ---delete关键字---
      删除 对象的方法或者属性
      
      var obj = {};
      obj.username ='ss',
      obj.show = function(){
        sxx;
      }
     delete obj.username; 
     delete obj.show;
     
    ```

5. 对象的 数据结构。

    1. 简单数据类型

    2. 引用数据类型（数组）

    3. 只读数据类型

    4. 对象---一种新的数据类型

        > ​	既可以存储数据（单个数据，或者数组） 又可以存储函数

6. 小例子:

    ```js
    一辆车 时速60，一座桥1000km，求开过去要多久。
    var car = {
        speed : 60,
        run : function(km){
            var hours = km.length / car.speed;
            return  hours;
        },
    };
    
    var road = {
        lengsth : 1000,
        splahs : function(){},
    
    };
    
    var hours = car.run(road);
    alert(hours.toFixed(2));
    
    // 对比 var hours = run(road);
    //之前 function run()直接就写在外面，这些我的理解就是相当于 把run函数封装起来，
    //封装成一个只有car能够使用的函数，并且，他可以直接使用car对象里面现成的属性来为其所用。
    //这里的road可以是一个 变量，比如 我 var road = 1000;
    //这里的road也可以是一个对象。对象就有属性和方法。
    //road是一个实参，名字是框死的。你根据这个框死的名字来把他变成对象，然后设置他的属性。
    //car.run里面的km是一个形参，形参的名字无所谓的，叫什么都行，主要功能就是要把形参的属性对应上
    //实参的属性。
    
    ******⏬******主要读这段********⏬******
    //正常理解逻辑应该是： 1， 我要什么？我要一个car.run(road) 的返回值。也就是说我需要car和road这两个对象的相互作用，这两个名字是框死的。
    // 2.那这里面框死的是car，run和road，那我就要去写car写car的run，以及写road。。
    //3. 因为我意识到road也是一个对象object，所以road的属性和car的属性都可以在run里面使用。
    //4.所以我在写run函数的时候，road.attribute就会用到。但是我不一定要用road，我可以变成任意的字
    //因为毕竟我在写 function run的时候 我写的参数只是 申明阶段的形参，叫什么无所谓的，只是占个位子而已。
     *🔼************主要读这段*************🔼*
      
    
    1. number.toFix(2) --> 保留两位小数。
    2. undefined / 2 --> NaN ,比如我这里 car对象 属性和功能都不变。但是我在road对象中不写 length属性，那么当我call car.run(road)的时候，我发现run里面要用到的 road.length属性没有写，那 road.length的值就是undefined
    3.一个对象的方法的写的时候 可以 使用该对象的属性。
    4.一个对象的方法在写的时候 可以把另一个对象当做参数使用，当把对象当成参数使用的时候。该参数对象的属性也可以在此对象的方法中使用。 但是申明函数的时候的参数，是形参，所以名字不重要，
    //就好比你 写一个函数，他的形参是 str，然后你里面有str.length
    //但是你 调用的时候你写 func( 3 );这明显就不对，因为3是number，3没有length这个属性，如果你写的自己设置的对象的话，他就会报undefined的错误，因为对于3这个实参，他没有你str形参里面的属性。
    //我们以前调用函数，参数填的要么是number，要么是str，要么是arr，现在还有可能是object。
    
    ```

    





---

## alert( undefined / 3);

> alert( undefined / 3) 
>
> ----> NaN..
>
> 不是undefined

----



## Math对象的一些方法

```js
更多方法，查阅Math文档。
1. Math.random();
//返回0-1之间的随机数。。
2. Math.max(num1,num2，num3,num4,num5);
// 返回最大数。。
3. Math.min(num1,num2,num3,num4,num5);
//  返回最小数
4. Math.abs(num)
// 绝对值
5.Math.ceil(10.3)
//向上取整 11
6.Math.floor(11.9)
//向下取整 11
7.Math.pow(x,y)
// x的y次方
8.Math.sqrt(num)
//num的开根号
9.Math.round(num)
//四舍五入成整数，但是只看小数点后面的一为。
//所以 3.49，Math.round之后是3.
10. Math.sin( )
		Math.cos( )
		参数： 弧度
    Math.PI = 180弧度 = 1弧度 * 180
    1弧度 = Math.PI/180;
		所以求sin30° 应该算的是 Math.sin( 30* (Math.PI/180));

```



-----

## 日期对象

1. ```js
    申明一个日期对象：
    var date =  new Date( );
    //如果( )不写参数，那就是 系统自带的时间，和外界时间无关。
    
    var date =  new Date( 2000,1,1,8,30,50 );
    //year, month,date,hours,mins,second,m-second.
    //但是注意这里的month是从0开始数的，0-11.
    //也就是说如果你month位置写的是1的话，他其实会显示是二月份。
    
    var date = new Date('2000/01/01');
    var date = new Date('2000-01-01');
    这2种也可以。
    但是： 一定要写 引号，否则会出错，！！！
    其次： 只能写 年月日，后面不能再写了，比如'2020-1-1-1-1-1'这样是错的。
    
    
    最后一种是直接输入毫秒数。
    var date = new Date(1000);
    //alert会是 GMT当地时间 1970-1-1 +1000ms。为参照时间基础往上加换算时间。
    ```

2. ```js
    Math对象. Date对象，Array对象，String对象的区别
    --- 是不是一个构造器 constructor
    //我的个人理解
    为什么
    Date对象 可以 var date = new Date( ); 
    Array对象 可以 var arr = new Array( ); //[]
    String对象 可以 var str = new String( );// ''
    Object 对象可以写成 var obj = new Object( ); // { }
    而 Math 不可以写成 var num = new Math( ); //报错说 Math不是一个constructor
    只能直接调用方法 写成 var num = Math.random( )
    
    
    为什么math方法不一样，为什么math方法不是一个构造器，我的理解就是math这个对象无法实例化！
    他是一个抽象的对象。 number对象，我可以实例化成1，2，3.array对象我可以实例化成[1] [1,2]但是 math对象我无法实例化出来任何一个实力，因为math是一个抽象的概念。
    
    所以math对象无法申明，也不需要申明，直接调用就行了：
     var num = Math.random( ); 
     var num1 = Math.pow(3,4);
    
    
    ```

3. ``` js
    关于日期对象的方法：
    
    var date = new Date( );
    // 证明我这个date赋的值是当前系统的时间
    alert(....)--->
      date.toDateString()
    	// 只显示date值中的 年月日
      date.toTimeString()
     // 只显示date值中的 时分秒
     date.toLocalDateString( )
     //取消时区，国际文，只显示 当地习惯的方式来表达date值中的 年月日
     date.toLocalTimeString()
    //取消时区，国际文，只显示 当地习惯的表达方式的 date值中的 时分秒
     所以 稍微好一点表达的方式是：
     alert(date.toLocalDateString() + ' ' + date.tOLOcalTimeString);
    
    ----自定义方式 输出当前时间----
    
    ***用getXXX( ) ，取出 当前date里面的值, 括号里没有参数，返回值就是取出来的值，date不变。
    var date = new Date( ); 
    // date值是当前系统时间。
    var year = date.getFullYear( ); 
    alert(date);  //不变，比如还是2020/11/11
    alert(year);  //2020
    //    用get方法时， 没有参数，
    //date的值不变，
    //返回值year就是取出来的值。
    
    ***但是用setXXX( ),括号里 必须写参数！ 因为他的本意就是 用括号里的参数设置到对应的位置。
    date发生改变，返回值是 【你改变过后的date 相当于1970-1-1 的毫秒差】
    var date = new Date( ); 
    // date值是当前系统时间。
    
    var year = date.setFullyear( );
    //报错，set必须带参数。
    
    
    var year = date.setFullyear( 1 );
    //语义就是 我要把我现在date的值的这个日期里面hours这一栏 改为 1.
    alert(date); // 0001 /11/18/21 / 59/59;
    alert(year); // 也就是返回值。 值是 0001年11月18号相当于 1970年1月1号的毫秒差。
    
    
    var month = date.getMonth( ) + 1;   
    //    get/set不同的参数，不同的返回值，改变/不改变date
    
    //这里提取出来的值是0-11. 这里你的 var month是用来显示现实中的month的，所以要 把提取出来的值+1
    
    如果是set的话。
    var month = date.setMonth( 10 );
    // 参数可以设置成 0 - 11.
    // 比如把参数设置为10.那么他 改变了 date，date的月份的值是10.如果你打印他，他会显示月份为11
    //如果参数设置的是12，他会默认进一位，年份+1，月份的值为12，相当于在0号位，1号位，2号位...一直到11号位都走完了，重新开始，所以12号位上的值和0号位的值是一样的，所以12号位的值就是1月份。
    
    alert(date); //发生改变。  2020/11/22/12/12/2 输入10，打印的是arr[10] ,也就是11月份
    alert(year); //返回值是 该日期 和 1970-1-1的毫秒差
    
    
    
    var date =date.getDate( );   
    //    get/set不同的参数，不同的返回值，改变/不改变date
    //看清楚 是 date
    
    var week =date.getDay( );
    //显示周数，但是只有getDay方法,只可以get到周几,但是无法像其他的有setDay方法，也就是说
    //周几 只能get，不可以主动设置，是根据你的年月日判断出来的。
    // 值为 0- 6. 0为周日。
    
    
    var hour =date.getHours( );
    //    get/set不同的参数，不同的返回值，改变/不改变date
    var min =date.getMinutes( );
    //    get/set不同的参数，不同的返回值，改变/不改变date
    var sec =date.getSeconds( );
    //    get/set不同的参数，不同的返回值，改变/不改变date
    
    
    ----注意----:
    
    setTime( 1000 ) 会自动 加上时区。
    所以使用 setTime( ms )后 getHours()取得的值是带 时区的，比如会+10.
    
    ---最后直接用字符串拼接----
    
     var str = year + '年' +month +'月'+ date +'日'+ hours+ ':'+ mins+ ':'+ secs+ ':' + ' 星期' + week；
    
    // 2000年 11月3日  2:22:12; 星期3.
    
    1. 一般来说 ，我们不喜欢用星期3，喜欢写成星期三，那我们就：
      function changeWeekNumber(week){
        arr=['日'，’一‘，’二‘，’三‘，’四‘，’五‘，’六‘]；
        return arr[week];
        //week 取值 0-6，返回 arr[week]正好返回对应的str值。
      }
    然后 var week = changeWeekNumber(date.getDay());
    
    2.一般来说， 我们 不习惯 8:30:1. 而喜欢写成 08:30:1.那我们就：
    function doubleNum( hour){
      if(hour < 10 ){
        return '0' + hour;
    }else{
        return hour;
      }
    }
    然后 var hours= doubleNumber(date.getHours());
    ```
    
4. ```js
    日期对象更多方法：
    
    1.  Date.parse( 日期对象 )
    
    格式： Date.parse( date);
    功能：可以将日期对象转化成与基准的 毫秒差。 基准是1970-1-1开始算。
    date不变；
    2.  date.getTime( ) 
    格式： date.getTime( ) 没有参数
    功能： 和 Date.parse(date) 一样，获得与基准的毫秒差。
    date不变；
    
    
    var date = new Date();
    
    var temp  = date.getTime();
    
    alert(date); // Thu Nov 19 2020 19:13:30 GMT+1100 
    alert(temp); // 1605773610493 理解为ascii码值也可以
    
    3.  date.setTime(必须写参数);
    功能： 类似于 其他的set方法。比如sethorus setMotnhs setFullyears，只是这次是全部set了。;
    格式：	date.setTime( 毫秒差，一串编号)
    功能：	把date的值 完全改变成 以参数转化而来的 值 。
    date改变。
    返回值是 新的date 与 1970-1-1的毫秒差。其实就是 【参数】了。
    
          
    
    var date = new Date();
    //此时 date的值就是目前系统的时间
    var temp  = date.setTime(1000);
    //我把系统的时间全部摸出，设置成编号为1000，其实就是把和1970年1月1号的毫秒差
    alert(date); //那时间就完全变成了 1970/1/1/1/0/0
    alert(temp); //返回值是 1970/1/1/1/0/0 和 1970/1/1/0/0/0的毫秒差，其实就是参数。
    
    
    
    
    
    
    ```

5. ```js
    计算2个日期之间相距多少天。
    
    Input : date1 ,date2
    Output: XX days;
    
    function countDays( date1,date2){
      	// 取的他们2个日期相当于1970年的毫秒差。
     date1 和 date2目前是 字符串，我们要把他 实例化为 date对象的实例：
        var d1 = new Date(date1);
        var d2 = new Date(date2);
        var dd1 = d1.getTime();
        var dd2 = d2.getTime();
        var seconds = Math.abs(dd1 - dd2)
        var days = parseInt(seconds /1000/3600/24);
    
        return days;
    }
    ```

6. ```js
    输入n。输出n天后的时间。
    function daysAfterN(n){
        var date = new Date();
        var ddate = date.getDate() + n;
        date.setDate(ddate);
    
        return date;
    }
    
    alert(daysAfterN(3));
    
    //而且不用担心 n如果大于30会怎么样，他会自动进1位的。
    ```




----

## 定时器

```js
定时器：
 格式： var timer = setInterval( 参数1， 参数2)
 参数： 参数1是 function， 参数2是毫秒。 
 功能: 每隔对应的毫秒数，执行1次函数。
 返回值： 系统创建该定时器的编号。
 
 拿到该返回值后，我可以通过clearInterval(返回值)来取消定时器。
 
 例子：
 var timer = setInterval( show, 1000);
//这里一定不能写().因为你写了 (),意思就是 调用了show函数，那么参数1就变成了show()的返回值，而不是
//show函数本身
//每间隔1s，执行一次show()函数
if (){
    clearInterval(timer);
//终止timer的运行。
    }
    
  //感觉他本质上有点像一个无限次数的loop循环。
    
    
    关于这个show。
    
    你可以写成 function show(){
      
    }

   然后调用：var timer = setInterval( show, 1000);

	或者 写
  window.onload = function (){
  var show = functinon(){
  xxxx;
    }
    };
 var timer = setInterval( show, 1000);
//这种 var 变量名 = 匿名函数的写法，必须在 window.onload里面用，否则取不到elementid的值。

   或者 直接 把function写在里面：
   var timer = setInterval(function(){}    , 1000);
		//这种情况下 这个function连名字都没有，所以一般叫做 匿名函数。

	但是无论如何， 你的参数1 不能写 show(),因为这个代表的是函数返回值，而不是函数本身。
	这里要么写匿名函数，要么就function show(){},这样。

```



----

## 实时动态时间

1. ```css
    date对象方法 获得  当前系统时间
    setInterval 设置一个1s间隔
    然后每1s去获得一次当前时间，并且打印出来。
    
    .timer{
        width: 600px;
        height: 100px;
        border:1px solid black;
        overflow: hidden;
        margin: 0 auto;
        font-size: 30px;
        text-align: center;
        line-height: 100px;
    }
    
     <div class="timer">
           121212
        </div>
    ```

2. ```js
    setInterval(function(){
        var date = new Date();
        document.getElementById('timer').innerHTML = date;
    },10);
    
    
    
    //或者复杂一点的写法
    
    var timer = setInterval(haha,10);
    
    // 这里为什么setInterval的间隔设置为10，而不是之前的1000.首先要明确，这个值是执行function的间隔，我如果设置的值为1s，会造成的效果是 第一次执行，要等1秒钟才显示。第二次，再隔一秒显示，每次显示的是当前，这就会导致我第一次生成的时候会延迟1秒，也就是时钟会比html文件晚1秒钟生成，影响用户体验。
    所以，这里我们应该直接设置间隔小1点，需要注意的是，我就算间隔的是10ms，但是我1秒钟之内就算执行10次查询日期，但是日期在这个1秒的十次内查询的值是不变的，所以不受影响，但是用户体验会好很多很多。
    
    function haha(){
            var date = new Date();
            document.getElementById('timer').innerHTML = date;
    }
    
    ************************
     **********************
      ********************
      
    
    ///这里先显示111，然后再发生变化，变成js里面的date，是因为，虽然浏览器是根据自上而下顺序运行的,也就是说 先js 再html 再css。但是这里由于function预编译，他提取取得了。具体来看下面。
    这里有一个很confusing的地方就是：
    在 script标签里面 document.getElementById('time').innerHTML 会出现在四种地方。
    我们逐一分析：
    
    首先第一种：直接写在script标签里面：
    <script>
      	 document.getElementById('time').innerHTML
      </script>
    这里你如果alert 他会显示为 null.innterHTML 报错，因为差不多node.'time'这个节点。为什么？因为他是自上而下运行的，当他运行js的时候还没看到下面的html，自然也就不知道'time' 的存在。
    //Uncaught TypeError: Cannot read property 'innterHTML' of null
     
    
    第二种： 写在 script标签的 function里面：
    <script>
      	 function change(){
      	alert( document.getElementById('time').innerHTML);
    }
    
    	change( );
    
      </script>
    这里你的document.getElementById('time').innterHTML也是无法取到值的，他自上而下的时候还没有看到html里面的内容，虽然有function预编译的功能，他的预编译时间比运行js和html都要早，所以在预编译的时候，他就发现有个变量名字叫 document.getElementById('time').innterHTML。但是这时他还不知道'time'是谁，所以这种方式也会报错。
    //Uncaught TypeError: Cannot read property 'innterHTML' of null
     
    第三种：
      ***事件驱动函数 配合 document.getElementById('time')****
        这种情况下，首先有点类似于情况二，因为他也是有一个function来触发js执行语句，但是区别是这个function的驱动不是写在script里的'show();'，而是 在html标签里面的驱动函数。
        在后面也会把事件函数写在window.onload里面，这里说的是写在html标签里面的情况。
    这种情况下，document.getElementById('time')这个函数本来是取不到值的，但是这个函数的触发 并不是在扫描js时候触发的，而是在点击触发时间函数时候才执行function语句，也就是说 当你能够触发时间函数的时候，才会执行show();此时，html肯定已经渲染好了，不然你也 点不到那button，所以他当然可以获取到document.getElementById('time')的值。
    
     <button id="haha" onclick="haha();">haha</button>
    //js里面写有一个function haha( ){
    		***document.getElementById('time')****
    }
     //但是要读到button的时候才会运行。
    
    第四种： 写在script标签里面的 window.onload里面：
    <script>
      	 window.onload = function (){
      alert( document.getElementById('time').innterHTML);
      执行语句。
    }
    }
      </script>
    这种可以获取 ( document.getElementById('time').innterHTML);因为有widow.onload在这些所有js的文件放在html css渲染完成之后执行。
    
    第五种特殊情况：
    系统内置的 SetInterval默认是 window.load的，也就是默认是后置的。所以他可以直接调用doc,getelementbyID('ss');其实底层原理是 setinterval全称应该是 window.load.setinterval()他肯定是window.onload的方法只是简写了。
    
    
    iwww = 0;
    setInterval(function(){
        iwww ++;
        document.getElementById('hahacao1').innerHTML = document.getElementById('hahacao1').innerHTML + iwww;
    
    },1000)
    
    // 这个js文件里面的setInterval虽然提前想取 hahacao1的值，但是还是可以取到的。
    
    
    
    实际参考代码：
    alert(document.getElementById('hahacao').innerHTML);
    //baocuo 
    
    function wori(){
        alert(document.getElementById('hahacao').innerHTML);
    }
    wori();
    //baocuo
    
    function haha(){
        var temp = document.getElementById('hahacao').innerHTML;
        alert(temp);
    }
    /// 'sss'
    
    window.load ......
    // 'sss'
    // 系统内置的 SetInterval默认是 window.load的，也就是默认是后置的。所以他可以直接调用doc,getelementbyID('ss');
    ```





----

## 谈谈迭代iteration

> ​	有些时候会突然对 
>
> ```js
> document.getElementByID().innerHTML = document.getElementByID().innerHTML + txt;
> 
> 或者
> 
> document.getElementByID().value = document.getElementByID().value.replace(arr[i],'**')
> 
> 这种犯迷糊。
> 
> 其实很好理解， 他就是一个 i++ ，也就是 i = i+1是一样的。
> 
> 
> //只要出现
> 同一个东西 需要经过同一个filter若干次的话，那一定是迭代。i 经过一个每次减一的filter要经过若干次，那本次的i肯定是上次的i算后的结果，所以 i =i -1; 
> //array很特殊，很多时候array可以直接在原数组上改变，连迭代都不需要。
> ```
>
> 

----

## 秒表



1. ```js
    业务逻辑：
    首先，在这个div里面有四大块， 第一块 显示的是 00：00：00
    第二快到第四块显示分别是 三个按钮： 开始， 暂停 和 复位。
    开始： 按下开始后，开始计时，每秒一跳。 
    
    暂停： 按下暂停后，停止当前的计时。 
    
    复位： 按下复位后，如果当前是开始状态，也就是正在跑，就停下来然后归零。
    								如果当前是暂停状态，就直接归零。
    ----进阶---
      暂停+开始： 按下开始后，按钮的字变成 暂停。
      					按下暂停后， 按钮的字变成 开始。
                相当于 把开始和暂停2个按钮整合成1个按钮。
    
    **********
    隐藏的bug:  因为开始是一个setInterval()，如果你点完开始以后，他开始计时之后。如果你又点了一次“开始”，那么就相当于启动了2个setInterval，这样就有2个计时器在同时+1，所以这样每一秒的计时速率就会加速一倍，一秒 数 2个数， 启动n个计时器，每一秒数的速度就提高n倍。
    
    解决办法：  $('start').onclick = function( ){
    					$('start').disabled = true;
     					 }
    					//设置button的disabled值为true，也就是禁用button，在点击开始后，让开始不可以再次点击。这样就不会建立1个以上的计时器。从根本上杜绝 开启2个以上的计数器。
    
    
    但是要注意 ： 封印一个button要写 $('ss').setAttribute('disabled','disabled');
    						但是解封一个button写的是： $('ss').removeAttr('disabled');
    **********
    
    **********
    小知识点:setInterval()是window.onload类的，会自动后置。
    				setInterval(function ,1000ms)。第0秒是不运行函数的， 第1000ms才运行第一次函数。
    **********
    
    关键知识点：
    1.如何给 开始 暂停 复位 来添加事件驱动函数。
    	以前是写在html标签里面的比如 <button onclick='funct ();'> 
    	现在我们可以 把onclick写在js里面。
      直接可以在js写成：
      document.getElementById('id').onclick = function (){
        //onclick后面跟的函数的执行代码，名字就不写了。
        //这就是一个匿名函数。
        //我不在乎函数取什么名字，我要的是里面执行的内容。
        
         show( );
        
         function show( ){
          xxxx;
        }
        
        与直接写 function (){
        		xxxx;
      };
        
        是一样的。但是不用取一个叫show的名字了。
    
    2. 如何让 document.getelementsbyID('')在html之前就可以获取到：
    
    		window.onload = function(){
          。。该处代码 在渲染完html后运行。 //比写在body标签后面的script标签加载还要晚。
        };
        
        但是 记住： window.onload只能通篇写一个，第二个会覆盖第一个的代码, 只会执行最后一个。
        
    3.document.getElementById('id') 太长了，如何简写？
    	function $ (id){
        return document.getElementById(id);
      }
    ...这样的话 document.getElementById('id') 就可以写成 $('id');
    
    4.使用document.write输出覆盖HTML问题：
        如果document.write在整个html文档流渲染完之后执行，就会重写页面。
        比如在 window.onload里面写document.write. //window.onload就代表整个window已经加载完了。
        或者 在 onclick 的function 里写 document.write.
        这两种情况下，html都已经是渲染好的状态了。所以再写document.write就会覆盖。
        document.write不想重写，只能写在html之前。
    		https://www.jianshu.com/p/718928a842ac
        
    5. 如何实现秒表的 时间功能？
    	---> 设置一个总秒数，开始为0 ，每次setinterval +1秒.
      ---> 把总秒数 换算成 x时x分x秒显示在页面上。
      ---> 小时数 =  parseInt(总秒数 / 3600);
      ---> 分钟数 =  parseInt(（总秒数 /  60）% 60);
      ---> 秒数 =  总秒数 % 60;
       
    
        
    ```

    ```js
    题外话：
    1.  <button id='startAndPause'>开始</button>
    		<button id='startAndPause'> 开始 </button>
     看起来一样，其实差别很大，写的时候别随意加空格。
     因为你如果要取'开始'的值的话，要调用$('startAndPause').innerHTML 这里他取到的是字符串类型的
     '[空格]开始[空格]'，这样不注意的话，如果你后面要 比较这个innerHTML或者做判断的话，就会出错，因为你没注意那个空格。
    ```

    

2. 

     ```html
        <div class="secondTimer">
            <div id="readMeter" class="readMeter">
                <span id="readMeterHours">00</span>
                <span>:</span>
                <span id="readMeterMins">00</span>
                <span>:</span>
                <span id="readMeterSeconds">00</span>
            </div>
            <div class="btns">
                <button id="start">start</button>
                <button id="pause">pause</button>
                <button id="restart">restart</button>
            </div>
        </div>
     ```

3. ```css
    
    .secondTimer{
        width: 100px;
        height: 200px;
        background-color: yellow;
        border: 1px black solid;
        margin: 0 auto;
        margin-top: 100px;
    }
    
    .secondTimer .readMeter{
        border: 1px black solid;
        margin: 20px 20px 20px 20px;
        text-align: center;
        font-size: 16px;
        line-height:18px;
    
    }
    
    .secondTimer .btns{
        border:1px solid black;
    }
    .secondTimer .btns button {
        display: block;
        background-color: grey;
        margin: 10px auto 10px auto;
    }
    ```

4. ```js
    js -基础版-
      
    window.onload = function(){
        var i = 0;
        var temp = 0;
        // var arr = [];
        temp = setInterval(function(){
            var date = new Date;
            $('timer').innerHTML = date;
        } , 100);
    
        function $( id ){
            return document.getElementById(id);
        }
    
        function changeNumber(num){
            if(num < 10){
                return '0'+num;
            }else if (num >= 10){
                return num;
            }else{
                return 0;
            }
        }
    
    
        $('start').onclick = function(){
            temp = setInterval(function(){
                i++;
                showTimer(i);
            } , 200);
            // arr.push(temp);
            $('start').setAttribute('disabled','disabled');
            $('pause').removeAttribute('disabled');
        };
    
        $('pause').setAttribute('disabled','disabled');
    	
        $('pause').onclick = function(){
            // for(i in arr){
            //     clearInterval(arr[i]);
            // };
            clearInterval(temp);
            $('start').removeAttribute('disabled');
            $('pause').setAttribute('disabled','disabled');
            
        };
    
        function showTimer(i){
            //set hours;
            $('readMeterHours').innerHTML = changeNumber(parseInt(i / 3600));
            //set mins;
            $('readMeterMins').innerHTML = 
            changeNumber(parseInt((i /60)% 60));
            //set seconds;
            $('readMeterSeconds').innerHTML = 
            changeNumber(i % 60);
        }
    
        $('restart').onclick = function(){
            $('pause').setAttribute('disabled','disabled');
            $('start').removeAttribute('disabled');
            i = 0;
            showTimer(i);
        };
    };
    
    
    js---进阶版-- 暂停开始按钮整合起来--
    $('restart').onclick = function(){
            $('pause').setAttribute('disabled','disabled');
            $('start').removeAttribute('disabled');
            i = 0;
            showTimer(i);
        };
    
        // $('startAndPause').innerHTML = 'ssss';
        // when click first time, start changed to pause
        //click again ,pause will change to start;
        $('startAndPause').onclick = function(){
            var prompt = $('startAndPause').innerHTML;
            // get current value is start or pause;
            if(prompt == '开始'){     
                 $('startAndPause').innerHTML = '暂停';
                 //start a timer;
                 i = 0 ;
                 temp = setInterval(function (){
                    i++;
                    showTimer(i);
                 },1000);
            }else if(prompt == '暂停'){
                 $('startAndPause').innerHTML = '开始';
                 //pause this timer;
                 clearInterval(temp);
            };
        }
    
      
      
    ```



---

## 进度条

```js
$('startBar').onclick = function(){
        var width = $('loadingbar').style.width;
        //'1px' 
        var arr = width.split('');
        arr.pop();
        arr.pop();
        widthNumber = Number(arr.join(''));
        // 1;
        var temp =  setInterval(function( ){
            widthNumber += 10;
            if (widthNumber == 400){
                clearInterval(temp);
            }else{
            $('loadingbar').style.width = widthNumber + 'px';}
        },50);
  
  //当然我写的比较复杂，不需要提取原先css里width的数字值，直接在function内部 写一个 var width = 0；就可以了。
  
  
  如果这个div写的 margin是 0 auto，两边自适应，那width增加的时候会导致 两边从中间同时扩展，正常的加载条，应该固定左右间距。
```

---

## BOM

1. ```
    一个BOM 就是一个 打开的浏览器窗口
    一个 browser object model
    浏览器的树形结构。
    每一个结点都是一个object：
    
    Window --- document------links/elements/forms/anchors
    				---frames
    				---history
    				---location
    				---navigation
    				---screen
    ```

2. ```js
    window对象的方法：
    window下的包括他子对象下的所有属性、变量、方法都属于window。
    -window.alert()  一般简写alert()
    -window.confirm()  一般简写confirm()
     var res  = confirm('sss');
     // 如果点击了确定，返回true
     //如果点击了 取消，返回值是 false
    -window.prompt( )一般简写prompt('please take a number','here input' );
    // 触发一个输入框；
    // 2个参数： 第一个参数：提示输入的信息。 第二个参数（可以不填）：输入框的预先设置的字符，placeholder
    var res  = ('please take a number','here input' );
    //如果点了确定，返回值是 刚刚输入的内容的字符串
    //如果点了取消，返回值是null
    ```

3. ```js
    open( );
    https://www.w3schools.com/jsref/met_win_open.asp
    
    比如: --button--onlick--myfunc
    
    js- myfunction(){
      open('www.baidu.com','xxxx','left:100,top:200,scrollbar:yes');
      //生成一个新窗口，url是百度，所以会跳转百度，然后我该窗口命名name为xxx，后面可以配合close使用。
      open('www.baidu.com','_self','left:100,top:200,scrollbar:yes');
      //name填_self,那点击后，当前页面跳转成baidu。有点像a标签里面的target属性的写法，但是区别是一个是a标签触发，这里是点击button触发。
      open('www.baidu.com','_blank','left:100,top:200,scrollbar:yes');
      //name填_blank,那点击后，生成新页面跳转成baidu。有点像a标签里面的target属性。
      但是区别是一个是a标签触发，这里是点击button触发。
      open('','xxxx','left:100,top:200,scrollbar:yes');
      //url不填，那就是生成空白页，该窗口 name设置为xxx的话，相当于把url地址与这个该窗口的name绑定，后面任何关于xxx的操作，都会锁定到这个叫xxx的窗口来操作，比如操作url。
      
    }
      
      
    Parameter	Description
    
    *URL	//给新建窗口设置url
    Optional. 
    Specifies the URL of the page to open. If no URL is specified, a new window/tab with about:blank is opened
    
    *name	 //给新建窗口起名字
    Optional. 
    Specifies the target attribute or the name of the window. The following values are supported:
    
    _blank - URL is loaded into a new window, or tab. This is default
    _parent - URL is loaded into the parent frame
    _self - URL replaces the current page
    _top - URL replaces any framesets that may be loaded
    name - The name of the window (Note: the name does not specify the title of the new window)
    
    *specs	//给新建窗口设置样式
    Optional. 
    A comma-separated list of items, no whitespaces. The following values are supported:
    
    channelmode=yes|no|1|0	Whether or not to display the window in theater mode. Default is no. IE only
    directories=yes|no|1|0	Obsolete. Whether or not to add directory buttons. Default is yes. IE only
    fullscreen=yes|no|1|0	Whether or not to display the browser in full-screen mode. Default is no. A window in full-screen mode must also be in theater mode. IE only
    height=pixels	The height of the window. Min. value is 100
    left=pixels	The left position of the window. Negative values not allowed
    location=yes|no|1|0	Whether or not to display the address field. Opera only
    menubar=yes|no|1|0	Whether or not to display the menu bar
    resizable=yes|no|1|0	Whether or not the window is resizable. IE only
    scrollbars=yes|no|1|0	Whether or not to display scroll bars. IE, Firefox & Opera only
    status=yes|no|1|0	Whether or not to add a status bar
    titlebar=yes|no|1|0	Whether or not to display the title bar. Ignored unless the calling application is an HTML Application or a trusted dialog box
    toolbar=yes|no|1|0	Whether or not to display the browser toolbar. IE and Firefox only
    top=pixels	The top position of the window. Negative values not allowed
    width=pixels	The width of the window. Min. value is 100
    
    *replace	
    Optional. 
    Specifies whether the URL creates a new entry or replaces the current entry in the history list. 
    The following values are supported:
    
    true - URL replaces the current document in the history list
    false - URL creates a new entry in the history list
    ```

4. ```js
    history对象
    window.history对象， 记录当前window的每次url变化产生的历史记录。
    注意，这里是当前窗口而不是 整个浏览器，只要url发生变化就会记录下来。
    
    history对象的属性
    history.length 历史记录的条数
    //自己手动输入的url也算
    
    
    history对象的方法
    
    history.back()
    //返回上一条记录
    
    // e.g.: onclick='history.back()'
    
    
    history.forward()
    //前进到下一条记录
    
    history.go(parameter)
    //参数取值：
    // 如果取0 ，刷新当前页面
    // 如果取 正整数， 前进n条记录
    // 如果取 负整数，后退n条记录
    ```

5. ```js
    window.location对象
    
    
      ------------location对象的属性---------------
    
    url的组成
     https://www.baidu.com:5050/sdaa.html/?username=haha&value=3#3-1
     协议 / 域名 （或者IP） / 端口号 / 路径 / ？查询字符 #锚点
     protocol / hostname / port /
       
     挨个访问：
    
    location.protcol
    alert( ) --> //https:
      
    location.hostname
    alert( ) --> //www.baidu.com 或者 61.212.211.3
      // 主机一个固定ip，客户一个固定ip，然后连接起来。
      
    location.port
    alert( ) ---> //默认隐藏
      //每个ip地址下可能运行了很多软件，所以 系统就给当前系统下正在使用ip的软件分配端口号
      // 0 ~ 65535
      //浏览器默认 8080，有些本地服务器也喜欢把服务器端口设成8080， https 80， http 443.
      
      //所以应该是 服务器:80端口  朝---> 客户端的8080端口 精准投递 html 文件
      //localhost：8080 意思就是 这个ip的地址下 8080端口显示的内容是啥。
      //有些时候显示端口被占了，那就说，比如你有一个服务器的sql软件已经提前和 客户端的8080端口绑定了，
      //所以你现在这个sql绑不上去
      
    location.pathname
    alert( )--> //sdaa.html
      
    location.search 
    alert( )--> //?username=haha&value=3
      					//? key = value & key = value
      //通过url里面键值对的信息来访问 查询【服务器】上的信息。
      // 这里就涉及 全后端交互了。你之前所有操作都是相当于更改url拿到对应的样式的html文件。
      //但是这里拿到html文件后，还可以配到拿到一些向服务器上查询到的数据来修改本地的html文件，比如修改某个node下的innerHTML，形成交互。
      
      
     不改变url下的交互： 点击一个btn，修改url里面的获得键值对，发送给服务器，服务器返回查询数据，修改本地DOM
     改变url的交互：服务器端要返回一个完整包 ，里面包含了新的生成的DOM，因为是一个全新的url。
     
     location.hash
    alert() -->#3-1
    改写location.hash属性的值，相当于在 地址栏后面改，一样的。
    如果你重新赋值，他会自动跳转。
    也就是 location.hash的 原本值就是 地址栏的内容。
    但是如果改写，那就会直接发生跳转。
    ***************************
    这就是如何用js的button实现 在地址栏更改url的功能 来获取服务器的返回值。和a标签功能很像。
    ***************************
    
    
    alert(location)--> //https://www.baidu.com:5050/sdaa.html/?username=haha&value=3#3-1
     //返回的是object类型
     
    
    alert(location.href )--> //https://www.baidu.com:5050/sdaa.html/?username=haha&value=3#3-1
       //返回的是string类型
      
      
      ------------location对象的方法---------------
    
      1.  window.location == window.document.location
    		//没有区别
    
    	2.location.assign(url)
    	  onlick = "location.assign('https://baidu.com')";
    //注意 单双引号交替使用 ，不然报错。
       当前页面跳转到 百度 ， 并且产生一条历史记录。也就是 浏览器上可以点击【返回】。
       
    	3.location.replace(url)
    	onlick = "location.replace('https://baidu.com')";
    	   当前页面跳转到 百度 ， 但是不产生历史记录。也就是 浏览器上不可以点击【返回】，
         直接把当前url替换了。
         
         
    	4.location.reload( )
    		刷新当前页面
        
        
    	5.location.reload(true)
    	 跳过浏览器缓存，重新向服务器申请一次数据，强制刷新
      
    ```





----

## DOM以及元素节点的方法

1. ```js
    DOM - Dcument Object Model 文档对象模型
    代表的是window下面的 document的， 也就是html标签内的内容。
    
    dom的数中 节点 分为三种：
    
    	元素节点 -也就是各种标签  
    	// 注意：数据类型是对象
      
      属性节点 -标签里的各种属性 
    	// 注意：数据类型是对象
      
      文本节点 -属性里面的值 数据类型是字符串
      // 注意：数据类型是字符串
    
    ```

2. ```js
    元素节点的操作：
    1. document.getElementById(id);
    //通过id查找元素节点，id必须唯一，返回特定的一个元素节点。
    
    
    2.访问特定元素节点的属性的值。
    	document.getElementById(id).atrributeName;
    //  访问title属性，就是document.getElementById(id).title
    //	访问value属性，就是document.getElementById(id).value
    //	但是！ 访问class属性，是document.getElementById(id).className。 因为class是一个关键字不可以写。
    
    3.修改特定元素节点的属性的值。
    	document.getElementById(id).atrributeName = 'Box';
      //  修改title属性，就是document.getElementById(id).title= 'Box';
    	//	修改value属性，就是document.getElementById(id).value= 'Box';
    	//	但是！ 修改class属性，是document.getElementById(id).className = 'Box';。 因为class是一个关键字不可以写。
    
    4.访问 / 修改 特定元素节点的 style属性下面的值。
       document.getElementById(id).style 
    	1.直接访问的话，返回的是一个 对象类型。既然是对象那就说，还有方法和属性在里面。也就意味着还可以往后加.
      2.所以访问的话要这么写 document.getElementById(id).style.width
    //如果是background-color这种css属性的话，也成 backgroundColor。
    	3.所以修改的话要这么写 document.getElementById(id).style.width = ’300px‘;
    // document.getElementById(id).style.backgroundColor = 'white';
    
    5. ********************非常重要***************************
      ********************非常重要***************************
      ********************非常重要***************************
      	原生的 .documentElement.style只能获取内联属性的值
       虽然这种方式取不到宽度值。但却可以设置元素的宽度值。比如：设置p元素宽度为200px:
    		就算之前不存在（没写） 宽度值，也可以凭空给他 设置出 宽度出来。
        
    	综上，所以，只有将元素的样式设置成内嵌式的，才可以通过 			                     document.getElementById("id").style.width 来获取宽度值；
      
      结论：
      一般来说，如果你想 ：改值 或者 新赋值，你就用 .documentElement.style. XXX = 'xxx';这个无论你是 外部样式还是内部样式，都一样的。它就跟给你写进去了。
      但是，你如果要 取值，查看原先的值， 就要用 offsetWidth方法或者 computedStyle()，而【不能】直接就说是 alert(.documentElement.style)就完事了.
      具体方法是： 比如你现在有一个写在css文件里面的样式，你想取他的width，你就写:
    						var temp = document.getELementByid(id).style.offsetWith
                或者：
     						window.getComputedStyle(element, pseudoElement)
    																		元素   该元素的伪元素
                         说白了就是一个tag标签   如果要查该标签的伪元素就写，不然写null
         具体来说:
      1-1 var temp = window.getComputerStlye(documnent.getElementById('id'),null)
    			//相当于取到 它的style这个 属性节点 
      1-2 temp.width
         //取到他的width。  
         // 
    	1-3 没有写的属性， 他返回的不是null 也不是 undefined，而是 0，比如 没有写border，但是你   去查询 temp.border ，返回值是 0px none rgb（0，0，0）
      ********************非常重要***************************
    
        function getCSStyle(id ,arg){
            if(arguments[1] == undefined){
            return window.getComputedStyle($(id),null);
                
            }else{
                return window.getComputedStyle($(id),arg);
     
            }
        } 
    
     		 alert(getCSStyle('test'));
         
         alert(getCSStyle('test').height);
    
         alert(getCSStyle('test','::before').height);
    
                           
    6. 伪元素 和 伪类 不存在于dom tree中，所以无法 通过js来修改其值，只能通过 computedStyle来查询到其值。
    
    ```

3. > 自定义函数的名字，如果和系统内置函数的名字重复，那么不会生效。
    >
    > 比如你自己function了一个 什么 open 什么close，他是不会走你写的那段function的。

4. ```js
    获取元素节点的方法：
    1.document.getElementById('id')
    只可以写 document。因为是唯一的，所以写node也没什么意义。
    因为 Since IDs are supposed to be unique, there's no need for a method that finds an element by ID relative to any other element
    
    
    2. node.getElementsByTagName(tagName)
    // 输入标签名字， 可以获取批量的 元素节点，因为往往这个标签不止一个。
    // 并且 可以把提取到的 tags批量成一个数组， 按照index 0 开始排列
    //使用时，可以直接 [0], [1]这样调用。
    //为什么填node呢，就是 这个如果写document的话就是整个html里面扫描，如果填node，那你node节点对象
    //就可以在该节点对象开始往下面的子元素节点开始查找（不包括该元素节点本身）
    	--------Html 片段-------
    	<div id="eleTest">
            <div>haha</div>
            <div>hoho</div>
        </div>
      --------Html 片段-------
        
      var tesTrestul = document.getElementById('eleTest').getElementsByTagName('div')[1].innerHTML;
        
        alert(tesTrestul); //hoho
    
    
    3. //和2类似的，
    	node.getElementsByClassName('classname');
    	//2，3一般肯定是 node，因为如果写document，那查询到的元素节点液体太多了。
    alert （ document.getElementById('eleTest') ）/
      //输出这种批量的元素节点 他返回的是一个 叫 object collection的东西，也就是对象集合。
      //我们把这种对象集合叫做【伪数组】， 他使用起来和数组类似。但是他本质上是对象，不是数组。
      // IE8以下不兼容
    
    4. document.getElementsByName( 'name ');
    // 通过name属性的值 来查找整个html文件，批量查找出所有 name属性的值 和参数一样的 元素， 所以是elements。
    document.getElementsByName( 'name '); 不存在node一说，也就是byname的情况下，只能全局查找
    document.getElementsByName( 'name '); 不存在node一说，也就是byname的情况下，只能全局查找
    document.getElementsByName( 'name '); 不存在node一说，也就是byname的情况下，只能全局查找
    document.getElementsByName( 'name '); 不存在node一说，也就是byname的情况下，只能全局查找
    document.getElementsByName( 'name '); 不存在node一说，也就是byname的情况下，只能全局查找
    document.getElementsByName( 'name '); 不存在node一说，也就是byname的情况下，只能全局查找
    document.getElementsByName( 'name '); 不存在node一说，也就是byname的情况下，只能全局查找
    但是其实name属性只有表单元素才有，别的元素可以设置，但没有意义。
    所以这个方法， 只会用在【表单元素】里。
    
    
    5. 所以一定要区别来。 element 和 elements在返回值的差别。
    前者 出现在 getelelmentbyid里面 返回的是一个单一的 node对象。
    后者 出现在很多 getelements相关的方法里，返回的是一个伪数组，所以往后面node查找的时候要附上index值。不然就不对。就算就一个节点，你还是要写 node[0],这样拿出来。
    //而且要注意!!!!!
    之前 单一对象 查询/修改 值的时候 直接再后面.style什么的就好了，但是如果是伪数组，你是不可以直接再后面.style，这是单个node对象的属性，不是nodes对象组的属性，所以你要单个用index提出来以后再改，如果要批量改，那就用 【数组循环loop】 就 循环改变！！
     for(var i =0;i<nodes.length ;i++){
       nodes[i].style.backgroundColor = 'red';
     }
    
    6.总结： document.getElementByID -唯一id -必须document -直接调用
    				document.getElementsByTagName   -可写node. -批量带s -伪数组调用
    				document.getElementsByClassName -可写node.-批量带s -伪数组调用
    				document.getElementsByName -批量带s -必须document -伪数组调用
    
    -------------------------另外2种获取元素节点的方法----------------------
    
    document.querySelector() 
    //不存在node.querySelector的情况，原因是因为我参数就是css选择器，直接定位了！
    参数： 字符串。 css选择器格式的 字符串。 
    返回值： 符合条件的 第一个 【单个】元素节点。
    例子： 比如我要搜一个 带id元素节点的，因为id是唯一的，然后想想他在css里写成什么样子。
    		document.querySelector('#id').style.width;
    			比如我要 定位一个 普通的元素节点，那在css选择器里写就是
         document.querySelector('div ul li').style.width
    			比如我要 定位一个 带class的节点，那在css选择器里写就是
         document.querySelector('div ul li .class').style.width
    			比如我要获取表单元素：
         document.querySelector('[name=hello]').style.width
    
    document.querySelectorAll()
    //不存在node.querySelector的情况，原因是因为我参数就是css选择器，直接定位了！
    参数： 字符串。 css选择器格式的 字符串。 比如
    返回值： 复合条件的所有元素节点 组成的 伪数组。
    例子(修改）： 比如我要搜一个 带id元素节点的，因为id是唯一的，然后想想他在css里写成什么样子。
    		document.querySelector('#id')[0].style.width;
    			比如我要 定位一个 普通的元素节点，那在css选择器里写就是
         document.querySelector('div ul li')[1].style.width
    			比如我要 定位一个 带class的节点，那在css选择器里写就是
         document.querySelector('div ul li .class')[2].style.width
    			比如我要获取表单元素：
         document.querySelector('[name=hello]').style.width
    
    例子(查询) ：  getComputedStyle(document.querySelector('[name=hello]')[0],null);
    
    
    
    ```

5. ```js
    由于IE8不兼容getClassName方法。
    
    我们如何自定义实现 node.getElementsByClassName( );
    
    也就是不用官方的 node.getElementsByClassName( );如何是用原生实现 一样的功能：
    
       function getEleByClassName(node,classStr){
            //input: node name ; class name
            //output node.getElementsByClassName('class')
           // but you can not use node.getElementsByClassName('class')
    
           var oTag = node.getElementsByTagName('*');
           //最关键的一点，就是这里：利用tag写*的话可以取到node下面的所有节点。
           var arr = [];
           //存放符合条件的节点
           for(var i = 0 ; i < oTag.length;i++){
               if(oTag[i].className == classStr){
                   arr.push(oTag[i]);
               }
           }
           return arr;
        }
    
        alert(getEleByClassName($('eleTest'),'btn').length);
    
    ```

6. ```js
    如何获取当前有效样式：
    
    1. node.style.xxx 只能定位到 node元素节点的内联样式。如果css是外部的，或者是头部的，就不可以通过style.xxx直接查询到的。而且一般都是外链样式。
    
    2. 如何查询到有效样式： 两种：
     document.getElementById('id').currentStyle['height']
    
    //IE 兼容
    
    getComputedStyle(document.getElementById('id'), null)['height']
    //其他兼容
    也可以写成：
    getComputedStyle(document.getElementById('id'), null).height
    //区别是[string]里填的是字符串，直接写的是属性名，遇到background-color要写驼峰式。
    
    封装一个函数测试兼容性？
    
    function getCssStyle(node , style){
      if(node.currentStyle){
         			return node.currentStyle[style];
         }else{
        			return getComputedStyle(node,null)[style];
      }
    }
    
    我想查询一个node的有效样式的话：
    getCssStyle($('id'),'height');
     返回值： ’20px‘
    
    //这里写带[]的形式，因为style形参输入后肯定是字符串类型的，那你就无法写 xxx.style这种形式，因为这种形式下的style不是字符串，而是属性名，你不能把参数的值写成属性名。
    
     查询的时候，如果是 查询的是 node.style.xxx,如果他没写行内样式，你自然是查不到的。要用getComputedStyle(node,null) 或者 node.currentStyle['style']来查询他的样式。
     
     设置不需要，因为设置的时候写的是 node.style.xxx ='xxx';这相当于直接在元素标签后面添加属性，也就是相当于直接写了一个行内样式，因为行内样式优先级最高，所以肯定可以更改。
    ```

7. ```js
    案例： 改变字体颜色大小
    
    写一个定时器，每一秒改变一次div内的文本的字体大小和颜色。（随机颜色）
    最开始 是原始大小， 然后每一秒增大一次，增大6次后，开始缩小，缩小6次后，回到原样。
    
    解决点 一：
    //颜色随机 rgb（0-255，0-255，0-255）
    所以 取random [0,256)
    

    ```
    
8. 



---

## DOM中attribute节点的方法

```
通过 元素节点.属性名 或者 getAtrributes方法 的方法 来访问 该元素节点的属性节点的值。

-获取元素节点属性的值  node.getAttributes('style')  //

通过node.attributes获得 属性节点。注意是属性节点，不是属性节点的值。
-获取元素节点的属性节点 node.attributes

```



```js
访问 行间 元素节点的各种属性。 attribute肯定是行间的，他有不存在什么外链的情况。只有style属性比较特殊，可能会来自外部，所以才要把获取和修改 分开讨论，这里肯定就不用分开了，赋值和取值都是一样的。比如value. innerHTML等等
直接用.操作，比如：
elementNode.style //继续.下去
elementNode.id //直接取得 id名字的字符串
element表单Node.name //name属性这种只能在表单元素中。如果用在别的元素中会找不到，显示undefined
elementNode.className //注意。class是关键字，要查找class属性必须写成className，//直接取得 class名字的字符串
```

```js
1.getAttribute('attribute-name')

elementNode.getAttribute('style')
//如果没写 要查询的属性，返回的是 null。不是undefined。
但是，
($('testFile').style);
//这种情况下 没写style，alert出来的是 空字符串。既不是null也不是undefined。



//这种 get方法获取 属性节点，相比较传统的直接.的优势有两个：

第一：class不需要写className了，直接字符串就行
elementNode.getAttribute('class');

第二：如果你自定义了行间属性， 用.的方法是查询/修改不到的。
必须通过 node.getAttribute('xxx');来访问。
elementNode.getAttribute('xxx');

2.setAttribute('attribute-name','attribue-value')
设置一个attribute和他对应的值。
与  node.attribute-name = nattibute-value;  这种赋值有什么区别呢？
第一：  node.xxx =‘wori’；
			//如果你要自定义行间属性，你必须用setAttribute方法，因为  node.attr=value的这种自定义方法不会显示在行内

第二：设置class的时候，不写className。直接写class


3.removeAtrribute('attribute-name')

普通操作：  node.attribute-name = '';
 区别：
 node.attribute-name = '';  // 只是用 空字符串覆盖
 
 removeAtrribute('attribute-name') //真正的把 attribute从行间 抹去。直接看不到了。


```







-----



## ElementNode 元素节点 的属性



```js
ElementNode 元素节点 的一些属性：

任何元素节点都有的三个属性。

1. innerHTML 只可以用在双标签里面。比如div。
//会把tag内所有写着的内容都输出， 包括子标签。
//比如 <div> wo <em>cao</em>    </div>  他的innerHTML是：  wo <em>cao</em>  是带着标签的。
而且标签在HTML文档里是可以解析出来的。这也就意味着：
alert(innerHTML); ...// 会带着标签符号一起输出,因为alert解析不了html标签。
docment.write(innerHTML); //标签会被解析
node.innerHTML ='<h1> sss </h1>'.//标签会被解析


2.相比较于innnerHTML, innerText就是输出 纯文本标签（包括子节点的）。

比如上面的题目，如果换成 innerText的话， 
 <div> wo <em>cao</em>    </div>  他的innerText是：  wo cao。//所有标签都被忽略，只提取文本
 也就是说，如果是查询， 会 查询出 纯文本。
 如果是赋值。 那
 node.innerText ='<h1> sss </h1>'.//标签不会被解析， 页面直接 带着 标签一起显示。
 
 
3.还有一种叫 outer.HTML
 
他与innerHTML的差别就是， outerHTML 包括了父标签，
比如：  <div> wo <em>cao</em> </div>
 他的 node.innerHTML 是：  '<div> wo <em>cao</em> </div>' //包括了div标签。
```

```

```

-----

##  DOM节点回顾&如何获取子节点

```js
                   Element    node 
             /              |               \
          AtrrNode   SubElementNode   TextNode
          								  |
             /              |               \
          AtrrNode   SubElementNode   TextNode
          
          
 前情回顾： 一共有三种节点。 
 					DOM元素节点    DOM元素节点的属性节点  DOM元素节点的文本节点 
          
 他们之间是怎么样的结构关系呢？
 1. 整个html结构靠着 ElementNode来连接形成 树形 结构. EleNode - SubEleNode-SubSubEleNode

 2. 每个ElementNode都连接着三部分。 一是 他的 属性节点。 二是 他的文本节点。三是他的 子节点。
 //所以 是 父节点、父节点的属性节点、父节点的文本节点、父节点的子节点。
 
 3.这四种是如何互相关联，以及要如何访问呢？
 	
 	3.1 如何访问 【任意】【一个】父元素节点。
  		-getElementbyXX系列一套
			-doc.QuerySelector系列一套
	3.2 如何访问一个元素节点的 属性节点？
  		-elemNode.getAttributes
			-elemNode.setAttributes
			-elemNode.removeAttrbute
			三大件
  3.3 如何访问一个元素节点的 文本节点？
 					通过elemNode的子节点来获取:
      -elemNode.childNodes[1] //这样来获取一个 object Text

			（下面的方法可获取文本元素，但是不一定对，因为并不一定是【此单个】元素节点的文本节点。
      	这些只是【元素节点】的属性，并不是直接 获取元素节点的【文本节点】。
			-elemNode.innerHTML //坏处是 所有子标签的的文本和标签都写进去了
			-elemNode.value //坏处是 是能提取表单元素输入的内容
			-elemNode.innerText //坏处是 所有子标签的的文本 都写进去了
      ）
	3.4 如何访问一个父元素的子元素，或者子元素的父元素，或者兄弟元素呢？
  		看下面。
			
      //除了 document.queryselector('   ')方法。
       
```

```js
如何获取子元素节点。
//除了 document.queryselector('   ')方法。
//因为这种方法，就是把 css样式里面如何 找到子标签的选择器 写进去就可以了。

如何用原生NodeJS的方法去访问子元素节点？
  -elemNode.childNodes[index]  访问当前节点下所有的子节点
  //返回一个伪数组对象集，记得用[index]
  // 输出的是各种节点，包括了子元素节点 【还包括了其文本节点】，所以可以使用此法来找到此elemNode的文本节点
  -elemNode.firstChild  访问当前节点下第一个的子节点
  //返回的是一个对象
	-elemNode.lastChild 	访问当前节点下最后的一个子节点
   //返回的是一个对象
  -elementNode.nextSibling
  -elementNode.previousSibling
	-elementNode.parentNode; 
  
 ****但是要注意， 以上这三种都会受到 代码缩减的影响：也就是 输入的空格回车换行都会变成【文本节点】
 **** **** **** **** **** **** **** **** **** **** **** **** **** **** **** ****
 **** **** **** **** **** **** **** **** **** **** **** **** **** **** **** ****
 **** **** **** **** **** **** **** **** **** **** **** **** **** **** **** ****
 **** **** **** **** **** **** **** **** **** **** **** **** **** **** **** ****
   
   另一套方法 只获取 子【元素】节点： -IE8以下不兼容
   -elementNode.children			获取elementNode的所有子【元素】节点
	 -elementNode.firstElementChild
	 -elementNode.lastElementChild
   -elementNode.nextElementSibling	获取elementNode的下一个兄弟节点
   -elementNode.previousElementSibling 获取elementNode的上一个兄弟节点
	 -elementNode.parenElementtNode;     只获取elementNode的父【元素】节点
```

```
 三种节点通用的属性。
 
 					node.nodeType       node.nodeName        node.nodeValue

elemNode      1 							标签名										null

AttrNode			2								属性名										属性值

TextNode			3								#text										文本内容
```

---

## 如何获取属性节点

```js
ElementNode.attributes;
//输出的是一个 attributes的map
//map叫集合
//map 的特点是：   无序 且 不重复
如何获取特定的attributes
ElementNode.attributes['attribteName'];
//注意，这里拿到的是 一个 属性节点，而不是属性的值，也就是拿到的是 完整的 title= 'ssss'这样的一个【数学节点】
我们可以通过：
ElementNode.attributes['attribteName'].nodeType;   // 2
ElementNode.attributes['attribteName'].nodeName;   // title
ElementNode.attributes['attribteName'].nodeValue; // hello
```

-----

## DOM节点操作

```
---script标签运行的顺序
先运行 -html内部的，---再运行 head标签里面外联的js文件

----css运行的优先级
标签行内的 优先级最大，   再到 head标签里面的css， 最后到 外联的css，

--- 变量的链式作用域


---- 函数预解析-
 num(); //报错。
 var num = function(){
 xxxxx;
 }
 
 变量函数 匿名函数 这种类型时候 一定要要 把调用写在下面。1121212是额
 DOM节点操作
 

```

//

w'w

112322222我问问2222222222