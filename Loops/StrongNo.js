//Find the strong Number (1!+4!+5!=1+24+120=145)
const prompt = require("prompt-sync")();
let pr = prompt("Enter a number more than 1 digit to find Strong no. :");
if(pr ===null){
    console.log("Canceled");
}
else{
    let num = parseInt(pr);
    if(isNaN(num)){
        console.log("Invailid Input");
    }
    else{
        if(num>0){
            let temp = num;
            let sum = 0;  
            while(num>0){
             let fact = 1;
            let rem = num%10;
            for(let i = 1 ;i<=rem ; i++)
            {
                fact = fact*i   ;     
            }
            sum+=fact
            num = Math.floor(num/10);

            }

 if (sum === temp) {
                console.log(`${temp} is a Strong Number`);
            } else {
                console.log(`${temp} is NOT a Strong Number`);
            }
            
        }
        else{
            console.log("Number Should Be +ve ")
        }
    }
}
