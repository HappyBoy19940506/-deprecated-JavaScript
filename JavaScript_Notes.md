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
    >     	+ 纯数字 直接算
    >        	+ 数字 + true/ false  /null 转换成 1/ 0 / 空  算
    >           	+ 数字+ NaN / undefined = NaN
    >              	+ string 和 +号 ：字符串拼接。连 NaN也可以拼。'haha'+NaN= 'hahaNaN'
    > + 自动数据类型转换( 非 加号）：
    >     + 纯数字，直接算
    >     + 数字和string，如果string是数字，可以当做数字算
    >     + 数字和string，但是string不是数字，等于  NaN
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
    
    
        
    10. ---



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
         
         document.getElementById('chatBox').innerHTML = tranTxt;
     
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

     

18. 

