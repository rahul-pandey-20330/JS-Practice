//Print Inverted Trangle
let prompt = require('prompt-sync')();
let n = Number(prompt("Enter Length For Printing Inverted Trangle : "))
if(isNaN(n)){
    console.log("Warnig! Invailed Input");
}
else if(n<0){
    console.log("Number Should Be Grater Than Zero");
}
else{
   for(let i =0; i<=n ; i++){
    for (let j=0;j<(n-i)+1 ;j++){
        process.stdout.write("* ");
    }
    console.log();
} 
}
