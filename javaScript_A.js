const prompt = require("prompt-sync")();
let String = prompt("Enter the String");
let arr = String.split(/\s+/);
 for( let i = 0 ; i < arr.length ; i++){
    let word = arr[i].split(',');
    let end = word.length;
    let start = 0;
    while(start<end){
        let temp =word[start];
        word[start] = word[end];
        word[end] = temp;
        start++;
        end--;
    }
    arr[i] = word.join('');
}
let Final_String = arr.join('');
console.log(Final_String); 