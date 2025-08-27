// // Swapping Using Third Variable
// let num1 = Number(prompt("Write First Number : "));
// let num2 = Number(prompt("Write Second Number : "));

// function SwappUsingThirdVariable(a,b){
//     let temp = a;
//     a = b;
//     b= temp;
//     return[a,b];
// }
// let [newNum1 , newNum2] = SwappUsingThirdVariable(num1,num2);
// console.log("Before Swapping \n First Number Is : ",num1 , " \n Second Number Is : ",num2);
// console.log("After Swapping \n First Number Is : ",newNum1 , " \n Second Number Is : ",newNum2);

// for Node js
let readline = require("readline");
let rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});
rl.question("Write First Number : ",(num1)=>{
    rl.question("Write Second Number : ",(num2)=>{
        function SwappUsingThirdVariable(a,b){
            let temp = a;
            a = b;
            b = temp
            return[a,b]; 
        }
        let [newNum1 , newNum2] = SwappUsingThirdVariable(num1,num2);
        console.log("Before Swapping \n First Number Is : ",num1 , " \n Second Number Is : ",num2);
        console.log("After Swapping \n First Number Is : ",newNum1 , " \n Second Number Is : ",newNum2);
        rl.close()
    });
})