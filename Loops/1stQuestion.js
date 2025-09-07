// Print 1 to n number and vice versa
let readline = require("readline");
let rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});
rl.question("Enter a Number : ",(n)=>{
    n = parseInt(n) // readline return values by default in string and parse convert in to string
    for(let i = 1; i<=n ; i++){
        process.stdout.write(i+"\n");
    }
    console.log(`\nNow n to 1 : n = ${n}`);
    for(let j = n;j>=1 ; j--){
        process.stdout.write(j+"\n");
    }
    console.log();
    
    rl.close();
});