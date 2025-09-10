const prompt = require("prompt-sync")();

while (true){
    let pr = prompt("What do you want to calculate (+, -, *, /, %, or x to exit): ");
    if(pr =='x' || pr=='X'){
        console.log("Program Terminated");
        break;
    }
        if(pr =='+'||pr=='-'||pr=='*'||pr=='/'||pr=='%'){
        let num1 = Number(prompt("Enter First Number : "));
        let num2 = Number(prompt("Enter Second Number :"));
        
        if(pr == '+'){
           let sum = num1 + num2;
           console.log("Addition is : " ,sum);
        }    
        else if(pr =='-'){
            let minus = num1 - num2;
            console.log("Substraction is : ",minus);
            
        }
          else if(pr =='*'){
            let mul = num1 *num2;
            console.log("Multiplication  is : ",mul);
            
        }  else if(pr =='/'){
            let frac = num1 / num2;
            console.log("Fraction is : ",frac);
            
        }
          else if(pr =='%'){
            let mod = num1 % num2;
            console.log("Modules is : ",mod);
            
        }
        
    }
   
}
