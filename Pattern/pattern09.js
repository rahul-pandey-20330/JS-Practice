//Print X Pattern
let prompt = require('prompt-sync')();
let n = Number(prompt("Enter No. Of Star You Want To Print : "));
let ch = 'Exit';
if(isNaN(n)){
    console.log("Invailed Input:");
}
else if(n<0){
    console.log("Number Must Be Grater Than Zero : ");
}
else{
    for(let i =1;i<=n;i++){
        for(let j=1;j<=n;j++){
            if(i==j){
                process.stdout.write("*");
            }
            else if(i+j ==n+1){
                process.stdout.write("*")
            }
            else{
                process.stdout.write(" ");
            }
        }
        console.log();
        
    }
}