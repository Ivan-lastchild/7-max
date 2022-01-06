"use strict";

let arr = [4];


console.log(maxLoop(arr));
console.log(maxRecurtion(arr));

function maxLoop(arr){
    let maxNum = arr[0];

    for(let i = 1; i<=arr.length; i++){
        maxNum = maxNum <= arr[i] ? arr[i] : maxNum;
    }
    return maxNum;
}
           
function maxRecurtion(arr){
    if(arr.length > 2){
        let maxNum = arr[0];
        arr.splice(0, 1);
        return maxRecurtion([maxNum, maxRecurtion(arr)]);
    } else if(arr.length == 2){
        return arr[0] >= arr[1] ? arr[0] : arr[1];
    } else {
        return arr[0];
    }
}
