
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
