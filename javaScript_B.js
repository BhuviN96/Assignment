const prompt = require("prompt-sync")();
let number = prompt("Enter the size of the array :");
let length = parseInt(number);
let arr = new Array(length);
for(let i  = 0 ; i < length ; i++ ){
    let digit = prompt("Enter the "+(i+1) +" Digit :");
    arr[i] = parseInt(digit);
}
for(let i = 0 ; i<length ;i++){
    for(let j = i+1 ; j<length ; j++){
        if(arr[i]<arr[j]){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
console.log(arr);