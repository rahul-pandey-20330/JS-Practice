//repeat hello
const prompt = require('prompt-sync')();
let times = Number(prompt("How Many times you want to print Hello Buddy : "));
if(isNaN(times) || times <=0){
    console.log('Invailed Input ');
}
else{
    for(let i =1 ; i<=times ; i++){
        console.log("Hello Buddy");
        
    }
}