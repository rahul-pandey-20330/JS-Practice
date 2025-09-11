//Print Trangle
let prompt = require('prompt-sync')();
let n = Number(prompt("Enter Number For Printing Trangle : "));
if(isNaN(n)){
    console.log("Invailed Input");
}
else if(n<0){
    console.log("Warnig! Number Must Be Grater Than 0");
}
else{
    for(let i =1;i<=n;i++){
        for(let j = 1;j<=(n-i)+1 ;j++){
            process.stdout.write("   ")
        }
        for(let j = 1 ;j<=i;j++){
            process.stdout.write("   *  ")
        }
        console.log();
        
    }
}