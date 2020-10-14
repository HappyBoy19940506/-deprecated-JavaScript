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

