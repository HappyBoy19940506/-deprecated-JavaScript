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