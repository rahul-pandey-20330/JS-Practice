//Write a code to print sum of n natural number
let readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});
rl.question("Enter A Natural Number : ",(num)=>{
    if(isNaN(num)){
        console.log("Invailed Input")
    }
    else{
        if(num > 0){
        let sum = 0;
        for(let i = 0 ; i<=num ; i++) {
            sum += i;
        }
        console.log(sum);
        
        }
       
    }
    rl.close();
})