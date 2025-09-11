// A 
// A B      Print This Pattern
// A B C
// A B C D
// A B C D E
let prompt = require('prompt-sync')();
let n = Number(prompt("Enter Any Ascii Value To Achive This Pattern : "));
if(isNaN(n)){
    console.log("Invaild Input");
}
else if(n<0){
    console.log("Number Should Be Grater Than 0");
}
else{
    for (let i =1;i<=n;i++){
        let ascii = 65;
        for(let j =1;j<=i;j++){
            process.stdout.write(String.fromCharCode(ascii)+" ");
            ascii++;
        }
        console.log();
        
    }
}