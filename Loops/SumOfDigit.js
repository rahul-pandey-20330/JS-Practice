// find the sum of digit
let prompt = require("prompt-sync")();
let num = prompt("Enter a number : ");
if(num === null){
    console.log("Cancelled");
}
else{
    let n = parseInt(num);
    if(isNaN(num)){
        console.log("Invailed Input");
    }
    else{
        if(n>0){
            let sum =0;
            while(n>0)
            {
                let rem = n %10;
                sum +=rem;
                n =Math.floor(n/10) ;
            }
            console.log(sum);
            
        }
    }
}

