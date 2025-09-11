// 1
// 1 2
// 1 2 3    (Print this pattern.)
// 1 2 3 4
// 1 2 3 4 5
let prompt = require('prompt-sync')();
let n = Number(prompt("Enter Number : "));
if(isNaN(n)){
    console.log("Invailed Input");   
}
else if(n<0){
    console.log("Warnig! Number Should Be Grater Than 0");
}
else{
    
    for(let i =1; i<=n ; i++){
        let line = ' ';
        for (let j = 1 ;j<=i ;j++){
            line+=j+" ";
        }
        process.stdout.write(line);
        console.log();
             
    }
    
}