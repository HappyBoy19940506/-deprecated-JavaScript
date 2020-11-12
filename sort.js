function bubbleSortAsc(arr){
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

function bubbleSortDsc(arr){
    for(var i = 0;i < (arr.length - 1);i++){
        for(var j = 0; j < (arr.length - (i + 1));j++){
            if (arr[j] < arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

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

function selectionSortDsc(arr){
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
            if( arr[i] < arr[j]){
                var temp = arr[i];
                arr[i] = arr[j]    
                arr[j] = temp;
            }
        }

    }
    return arr;
}