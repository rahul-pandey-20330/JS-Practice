//Guss The Number
const prompt = require("prompt-sync")();
let num =Math.floor(Math.random()*100)+1;
let guess;
while(true){
    guess = parseInt(prompt("Guess any number Between 1 to 100 : "));
    if(guess == num){
        console.log("Congratulation You Are Right");
        break;
    }
    else if(guess < num){
        console.log("Too Low! Try Again");
    }
    else{
        console.log("Too High! Try Again");   
    }
}