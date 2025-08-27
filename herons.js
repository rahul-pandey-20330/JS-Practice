// find area of tringal by heron's formula sqrt of s * (s-a) *(s-b) *(s-c) here s is semi parameter
let a = 5;
let b = 4;
let c = 3;
let s = (a + b + c)/2;
let Area = Math.sqrt(s * (s-a) *(s-b) *(s-c));
console.log(s,Area);
