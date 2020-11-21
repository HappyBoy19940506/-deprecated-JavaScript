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

// average();

function haha(){
    average();

}

// haha();


/* var arr1 =[1,2,3];
var arr2 = arr1.concat()

arr2.push(4);
document.write(arr1+'</br>');
document.write(arr2+'</br>'); */



function sum(n){
    if(n == 1){
        return 1 ;
    }else{
        return sum(n-1)+n ;
    }
}

/* var res = sum(100);
alert(res); */

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

// tri();
/* var arr1=[1,2];
var arr2=[3,4];
arr1 = arr2;
arr2.push(4);
alert(arr1);
alert(arr2); */

/* var arr1=[1,2];
var arr2=[1,2];
var res = (arr1 == arr2);
document.write(res); */


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

// var arr1 = [9,8,7,6,5,4];
// bubbleSort(arr1);
// alert(arr1);
// var res = bubbleSort([9,8,7,6,5,4]);
// console.log(res);

// var num = 12345;
// numCount(num);

// var num = 123456;
// var count = 0;
// while( num > 0){
//     var res = num % 10;
//     document.write('分别是' + res);
//     num = parseInt(num / 10);
//     count++;
    
// }
// document.write(count);

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

function has(arr,item){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === item){
            return true;
        }
    }
    return false;
}

// alert(has([10,20], 30));
function zhishu(num){
    for(var i = 2; i < num; i++){
        if(num % i == 0){
            return 'heshi';
        }
    }
    return 'zhishu';
}

// alert(zhishu(4));

//  var res = ean13(692223361219);
//  alert(res);

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
        if(arr[i] % 2 === 0){
            arrEven.push(arr[i]);
        }else{
            arrOdd.push(arr[i]);
        }
    }
         document.write(arrEven);
         document.write('</br>');
         document.write(arrOdd);
         document.write('</br>');
    var sumOdd = 0;
    var sumEven = 0;
    for(var j = 0; j < arrOdd.length;j++){
        sumOdd += arrOdd[j];
    }
    for(var k = 0; k < arrEven.length;k++){
        sumEven += arrEven[k];
    }
    document.write(sumOdd);
    document.write('</br>');
    document.write(sumEven);
    document.write('</br>');
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


// var arr = [1,2,3];
// alert(Number(arr.join('')));


function find(){
    var str = 'When i was young ,I love a girl in neighoubr class';
    // search( )  substring()

}


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
    // alert(arr);
    var newStr = arr.join('');

    return newStr;
}
// var res = wordTransfer('helloMyWorld')
// document.write(res);
// document.write(wordTransfer('helloMyWorld'));

// function haha(a){
//     return a + 3;
// }
// alert(haha(3));


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

// alert(NumberCode(6));

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

// alert(verifyCode(6));

function reverseStr(str){
    var arr =  str.split(' ');
    //[welcome,to,beijing]
    var newArr  = arr.reverse();
    //[beijing,to,welcome]
    var newStr = newArr.join(' ');
    return newStr;
}

// alert(reverseStr('welcome to beijing'));

function duplicateArr(arr){
    var arr1 = arr.concat().reverse();
    var newArr = arr.concat(arr1);
    return newArr;
}

// alert(duplicateArr(['one','two','three']));

function countStrNumber(str){
    //input: "Yes, she*is&my@love"
    //output: 5
    var arr = str.split('');
    var count = 0;
    for(var i = 0; i < arr.length -1 ;i++){
        // alphebt + non-alphbet = a word.
        if(arr[i].charCodeAt(0) >= 65 && arr[i].charCodeAt(0) <= 90 || arr[i].charCodeAt(0) >= 97 && arr[i].charCodeAt(0) <= 122 && arr[i+1].charCodeAt(0) < 65 || arr[i+1].charCodeAt(0) > 90 && arr[i+1].charCodeAt(0) < 97 || arr[i+1].charCodeAt(0) > 122){
            count++;
        }
    }

    return count;
}

// alert(countStrNumber("Yes, she*is&my@love!haha@wocaoinmabi whart"));

function countSubStr(supStr,subStr){
    //input abcabcabc  abc
    //output 3
    var arr = supStr.split(subStr);
    // alert(arr);
    return arr.length - 1;
}

// alert(countSubStr('abcabcabcabca1bc2abc','abc'));

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



// alert(mailCheck('sadadasdasdasdasda.com')); //false
// alert(mailCheck('ssdsada@gmail.comp')); //false
// alert(mailCheck('$sada@gmail.com'));//false
// alert(mailCheck('sada@gmail.com'));//true


// function show(b){
//     if( b > 0){
//         alert('worinima');
//     }else if( b > 1){
//         alert('hahahaha');
//     }
// }

// show(8);

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


function usernameCheck(){
    var str = document.getElementById('usernameInput').value;
    if(str.length > 18 ||  str.length < 6){
        document.getElementById('usernameCheckInfo').innerHTML = 'length must be 8-18';
    }else if(str[0] <= '9' && str[0] >= '0'){
        document.getElementById('usernameCheckInfo').innerHTML = 'the first letter can not be a number';
    }else if(containIllegalChar(str)){
        document.getElementById('usernameCheckInfo').innerHTML = 'can only contain 0-9 a-Z and _';
    }else{
        document.getElementById('usernameCheckInfo').innerHTML = 'congrats, you can use this username';
    }
}

// var obj = new Object;
// obj.show = function(){

// }
// obj.show();
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
// 对比 var hours = run(road);
//之前 function run()直接就写在外面，这些我的理解就是相当于 把run函数封装起来，
//封装成一个只有car能够使用的函数，并且，他可以直接使用car对象里面现成的属性来为其所用。
//这里的road可以是一个 变量，比如 我 var road = 1000;
//这里的road也可以是一个对象。那是对象就有属性和方法。参数如果是对象，那参数的属性就必须有
//对应的对象的属性名称一样的来对应。比如我 形参.length 我如果这么写，那肯定参数是一个对象，那么
//我后面无论实参叫什么，都必须有一个相同的属性名与之对应，xxx.length;

// var hours = road.length /  car.speed;



// alert(hours.toFixed(2));


function countDays(date1,date2){
    var d1 = new Date(date1);
    var d2 = new Date(date2);
    var dd1 = d1.getTime();
    var dd2 = d2.getTime();
    var seconds = Math.abs(dd1 - dd2)
    var days = parseInt(seconds /1000/3600/24);

    return days;
}

// alert(countDays('2020-1-1','2020-1-3'));

function daysAfterN(n){
    var date = new Date();
    var ddate = date.getDate() + n;
    date.setDate(ddate);

    return date;
}

// alert(daysAfterN(3));

// setInterval(function (){
//     var date = new Date();
//     document.getElementById('timer').innerHTML = date;
// },2000);



// window.onload = function(){
//     var cp = function(){
//         var date = new Date();
//         document.getElementById('timer').innerHTML = date;
//     };
//     setInterval( cp , 1000);
// }


// function haha(){
//         var date = new Date();
//         document.getElementById('timer').innerHTML = date;
// }

// 
// 
// 
// window.onload = function( ){
//     alert(document.getElementById('readMeter').innerHTML);
// }

// alert(document.getElementById('hahacao').innerHTML);
// //baocuo 

// function wori(){
//     alert(document.getElementById('hahacao').innerHTML);
// }
// wori();
// //baocuo

// function haha(){
//     var temp = document.getElementById('hahacao1').innerHTML;
//     alert(temp);
// }

// iwww = 0;
// setInterval(function(){
//     iwww ++;
//     document.getElementById('hahacao1').innerHTML = document.getElementById('hahacao1').innerHTML + iwww;

// },1000)



//  var cn =  function(){
     
//      return 1;
//  }

//  function cn(){
//      return console.log('1');
//  }

// var cn =function(){
//     return console.log('1');
// }


// setInterval(function(){
//          return console.log('1');
//      } , 1000);

// function haha(){
//     document.write('1111111');
// }
// var huhongying  = setInterval(function(){
//     return console.log('1')},1000);

// alert(huhongying);
// var huhongying2  = setInterval(function(){
//     return console.log('2')},1000);

// alert(huhongying2);


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
            //set hours;
            $('readMeterHours').innerHTML = changeNumber(parseInt(i / 3600));
            //set mins;
            $('readMeterMins').innerHTML = 
            changeNumber(parseInt((i /60)% 60));
            //set seconds;
            $('readMeterSeconds').innerHTML = 
            changeNumber(i % 60);
        } , 1000);
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

    $('restart').onclick = function(){
        $('pause').setAttribute('disabled','disabled');
        $('start').removeAttribute('disabled');
        i = 0;
        $('readMeterHours').innerHTML = changeNumber(parseInt(i / 3600));
        //set mins;
        $('readMeterMins').innerHTML = 
        changeNumber(parseInt((i /60)% 60));
        //set seconds;
        $('readMeterSeconds').innerHTML = 
        changeNumber(i % 60);
    };
};

// var miao = 5000;
// var xiaoshi = parseInt(miao /3600);
// var fenzhong = (parseInt(miao / 60)) % 60;
// var miaoshu = miao % 60;
// alert(xiaoshi + '+' +fenzhong + '+' +miaoshu);