"use strict";

let arr = [4,5,45,45,46,56,5];


console.log(maxLoop(arr));
console.log(maxRecurtion(arr));

function maxLoop(arr){
    let index = arr[0];

    for(let i = 1; i<=arr.length; i++){
        index<=arr[i] ? index = arr[i] : index;
    }
    return index;
}
           
function maxRecurtion(arr){
    if(arr.length > 2){
        let index = arr[0];
        arr.splice(0, 1);
        return maxRecurtion([index, maxRecurtion(arr)]);
    } else{
        return arr[0] >= arr[1] ? arr[0] : arr[1];
    }
}
