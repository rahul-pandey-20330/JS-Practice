// Sum of n natural number and also calculate factorial
let prompt = require("prompt-sync")();
let n = prompt("Enter a number : ")
let sum = 0;
let fact = 1;
for(let i = 1; i<=n ; i++){
    sum += i;
    fact *= i 
}
console.log(`Sum of ${n} natural number is :${sum} \nAnd Factorial of ${n} is ${fact}`);
