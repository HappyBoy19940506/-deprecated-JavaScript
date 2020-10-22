/* alert(100 + '10' + NaN);
// 10010NaN
alert(100 + '10' - NaN);
// NaN
alert(100 + 10);
// 110
alert(100 + '10' + NaN);
// 10010NaN
alert(100 - 10);
// 90
alert(100 - '20');
// 80
alert(null + 'sb');
//nullsb
alert(1 + 1);
// 2
alert('1' + 2);
//12
alert('1'+ '3');
//13
alert(1 + 'wori');
//1wori
alert(1 + NaN);
//NaN
alert('100' - 20);
//80
alert('100' - '30');
//70
alert(100 - 'a')
//NaN
alert( 100 - '100aa')
//NaN
alert(NaN + 'wori')
//NaNwori
alert(1 + null);
//1
alert(1 + undefined);
//NaN
alert(1 + true);
//2
alert(1 + false);
//1

 */

/*  var money = 10000;

 money = money + (0.05 * money * 50);

 alert(money); */

//  var hua_t = 80;

//  var she = 5 / 0.5  * (hua_t - 32);

//  alert(she);
//
//

// var num = 978;
// var baiwei = parseInt(num / 100);
// var shiwei = parseInt((num - (100 * baiwei)) / 10);
// var gewei = parseInt( num -100*baiwei - 10*shiwei );

// alert(baiwei);
// alert(shiwei);
// alert(gewei);

// var num = 978;
// var baiwei = parseInt(num / 100);
// var shiwei = parseInt( (num / 10) %10 );
// var gewei = num % 10;
// alert(baiwei);
// alert(shiwei);
// alert(gewei);

// var result = ('10a' < 11);
// alert(result);
// // false

// var result = ('10' < 11);
// alert(result);
// // true
/* alert(! '');
// true
alert(!'ss');
//false
alert(!0);
//true;
alert(!10);
//false;
alert(!NaN);
//true;
alert(!null);
//true;
alert(!undefined);
//true;
alert(!Infinity);
//false; */

/* alert(!'0');
//false;

alert(Boolean('0'));
//true; */
/* 
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
//false; */

/* var num1 =	20;
var num2 =	30;
alert(num1 + '+' + num2);
var temp = num1;
//temp-->20 num1-->20;
num1 = num2;
//num1 --> 30; num2->30;
num2 = temp;
//num2 -->  20; temp --->20;
alert(num1 + '+' + num2); */

//交换两个数的值，需要引入第三个量。
// var number1 = 1;
// var number2 = 2;
// alert('this number' + 'is' + number1 + 'and' +)

// var num1 = 123;
// var num2 = 456;

// if (num1 < num2){
//     alert(num2+ 'bigger');
// }else{
//     alert(num1+ 'bigger');
// }

/* var year = 1922;
if((year % 400 == 0)||((year % 4 == 0 ) && (year % 100 != 0 ) )){
    alert('run nian');
}else{
    alert('bu shi run nian');
} */

/* 
var num = 6;

if(num < 1){
    alert('y is' + num);
    if( num > 85){
        alert('1000');
    }else if( num <= 85){
        alert('1122');
    }else{
        alert('sb');
    }
}else if( num < 10 && num >= 1){
    alert('y is' + num);
}else{
    alert('y is ' + num);
} */

/* var grade = 'C';

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

} */


/* var month = 8;
switch(month){
    case 1:
    case 2:
    case 3:
    case 4:
        alert('worinima');
        break;
    default:
        alert('wocaonidie');
        break;
} */



// var i = 1;
// var sum = 0;

// while(i < 101){
//     sum = sum + i;
//     i++;
// }

// alert(sum);

/*  */
/* var i = 1;
var sum = 0;
while(i < 101){
    if(i % 2 == 0){
        sum = sum - (1 / i);
    }else{       
        sum = sum + (1 / i);
    }  
    i++;
}
alert(sum); */
/*  */
/* var i = 1;
var sum = 0;
while(i < 101){
    if(i % 2 == 0){
        i = i * 1;    
    }else{
        i = i * (-1);
    }
    document.write(i);
    i++;
}  */
// alert(sum);
/*  */
/* var i = 1;
var  sum = 0;
var flag = 1;
while( i < 101){
    sum = sum +  flag * (1/i);
    i++;
    flag = flag * (-1);
}
alert(sum); */
/*  */

/* var i = 3;
if(i % 2 == 0){
    i = i * 1;    
}else{
    i = i * (-1);
}
alert(i); */

/* for(var i = 1; i <= 5 ; i++){
    for(var j=1; j <= i; j++){
      document.write(j + '*' + i + '='+ (i*j) +'&nbsp');
    }   
    document.write('</br>');
  } */

  
/* 
for(var i = 1;i <= 5;i++){
    for(var k =1; k <= (5-i);k++){
        document.write('😃');
    }
    for(var j = 1;j <= i;j++){
        document.write('*');
    }
    document.write('</br>');
} */


/* var num = 17;
var zhishu = true;
for(i = 2;i < num;i++){
    if(num % i == 0){
        zhishu = false;
        break;
    }
/*     else{ 测下一个 i} */    
/* }

if(zhishu == true){
    alert('zhishu');
}else{
    alert('heshu');
}
 */ 