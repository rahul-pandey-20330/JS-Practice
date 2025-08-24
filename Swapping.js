// Swapping Using Third Variable
let num1 = Number(prompt("Write First Number : "));
let num2 = Number(prompt("Write Second Number : "));

function SwappUsingThirdVariable(a,b){
    let temp = a;
    a = b;
    b= temp;
    return[a,b];
}
let [newNum1 , newNum2] = SwappUsingThirdVariable(num1,num2);
console.log("Before Swapping \n First Number Is : ",num1 , " \n Second Number Is : ",num2);
console.log("After Swapping \n First Number Is : ",newNum1 , " \n Second Number Is : ",newNum2);

