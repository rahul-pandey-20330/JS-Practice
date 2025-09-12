//Reverse Array for K times Right Rotation
let prompt = require("prompt-sync")();
let elem = Number(prompt("Enter K Element : "));
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let count = 0;
elem = elem % arr.length;
for (let j = 0; j < elem; j++) {
  count++;    
  let copy = arr[arr.length - 1];
  for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = copy;
}
console.log(arr);
console.log(`Right Rotatiin For k Element is ${count}`);
