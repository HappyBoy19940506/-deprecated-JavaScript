
// var num = 1;
// var count = 0;
// for(i = 1;i <= 64 ;i++){
//     count = count + num;
//     num = num * 2;
// }
// alert(count);


/* for(var i = 0;i <= 9;i++){
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




 for( var i = 100; i < 1000; i++){
     var a = i % 10;
     var b = parseInt(i / 10) % 10;
     var c = parseInt(i/100);
     if(i == Math.pow(a,3) + Math.pow(b,3) + Math.pow(c,3)){
         document.write(i+ '</br>');
     }
 } */


/* 

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

if(a <= b){
    var num = a;
}else{
    num = b;
}

// document.write(num);
for(var i = num; i >= 1;i--){
    if( a % i == 0 && b % i ==0){
        document.write(i + '*');
        break;
    }
}
 */


//  var n = 3;
//  var a = 2;

//  for(var i = 1; i <= 3; i++){
//      var sum = 0;
//      for(var j = (i-1); j = 0; j--){
//         var temp = a*(Math.pow(10,(i-1)))
//         sum = sum + temp;
       
//      }
//      document.write(sum+'</br>');

//  }

/* var n = 4;
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
document.write(finalSum); */


/* for(var i = 10000; i <= 99999; i++ ){
    var a = i % 10; //ge wei;
    var b = parseInt( (i % 100) / 10 ); // shiwei;
    var c = parseInt((i % 10000) / 1000); // qian wei;
    var d = parseInt(i / 10000); // wang wei;
    // document.write(a + '*'+ b+ '*'+ c+ '*'+ d);
    if( a == d && b == c){
        document.write(i+'</br>');
    }
}

 */

/* var year = 2020;
var month = 8;
var date = 2;
//nian yue ri ;
var sum = 0;
switch(month){
    case 1:
        alert;
    default:
        alert('Input error');
        break;


} */

/* var year=parseInt(prompt('输入年'));
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

 */
/* 
function sum(){
    return
} */

////
////
///
/* function randomNumber( ){
    var arr = new Array(10);
    for (var i = 0; i < arr.length; i++){
        arr[i] = parseInt(Math.random() * 10);
        // Math.random() 会随机生成0到1的小数，包括0，不包括1. 把他乘以10，就会变成0到9的小数。然后再取整，就可以随机生成0-9的数字。
    }

    alert(arr);

}

randomNumber(); */
/* 
var arr1 = [1,2,3,4];
var res = arr1.reverse();
alert(arr1);
alert(res); */
/* 
var arr1 = [122,12,34,4];
var res1 = arr1.sort();
alert(res1);
//12,122,34,4
var res2 = arr1.sort(function sortNumber(a,b){
    return a - b;
})

alert(res2);

//4 ,12, 34 ,122 */

/* var arr1 = [1,2,3,4,5];
var arr2 = arr1.slice(0,1);
alert(arr1);
//[1,2,3,4,5]
alert(arr2);
//[start,end) 
// [1]; */

/*  var arr1 = [1,2,3];
 var res = arr1.join('s');
 alert(res); */


var arr1 = [1,7,3,11];
var res = arr1.sort(function sortNumber(a,b){
    return a - b;
});
alert(res + 'wocaoinma');
alert(arr1);

