// Find Prime number (Divisibal by itself and 1)
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

            // let AssumePrime = true;   // 1st way
            // for (let i = 2; i<=Math.floor(num/2) ; i++)
            // {
            //     if(num%i === 0){
            //         AssumePrime = false;
            //         break;
            //     }
            // }
            // console.log(AssumePrime );
            //2nd way
            console.log(isprime(num));
            
        }
        else{
            console.log("Number Should Be +ve And More Than 0");
            
        }
    }
}
function isprime(num){
 if(num<=1) return false;
 if (num ===2) return true;
 if(num %2 ==0) return false;
 for(let i =3 ;i<=Math.sqrt(num) ; i+=2){
    if (num % i ==0) return false
 }
 return true;
}