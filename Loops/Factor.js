// Find the factor of a number (Factor Mtlab jo kisi number se completly dived ho jaye)
let prompt = require("prompt-sync")();
let pr = prompt("Enter a number : ");
if (pr === null){
    console.log("Cancelled");
}
else{
    let num = parseInt(pr);
    if(isNaN(num)){
        console.log("Invailed Input");
    }

    else{
        if(num > 0){
            for (let i = 1; i<=Math.floor(num/2) ; i++)
            {
                if(num%i == 0){
                    console.log(i);
                    
                }
            }
            console.log(num);
            
        }
        else{
            console.log("Number Should Be +ve And More Than 0");
            
        }
    }
}
