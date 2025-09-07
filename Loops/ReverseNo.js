// Find The Reverse Of Number
let prompt = require("prompt-sync")();
let pr = prompt("Enter any Number : ");
if(pr ===null){
    console.log("Cancelled");
    
}
else{
    let n = parseInt(pr);
    if(isNaN(n)){
        console.log("Invailed Input");
        
    }
    else {
        if(n>0){
            let rev = 0;
            while(n>0){
                let rem = n%10;
                rev = rev*10 + rem; 
                n = Math.floor(n/10);
                
            }
            console.log(rev)
        }
    }
}