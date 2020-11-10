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

    13. 

