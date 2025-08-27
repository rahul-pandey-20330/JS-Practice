//calculate the final amount of Electricity
//  Unit                 Price 
// 0 - 100             4.2/unit
// 101 - 200           6/unit
// 201 - 400           8/unit
// morethan 400        13/unit
let readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});
rl.question("Enter Unit Of Electricity : ",(unit)=>{
    let Amount = 0;
    if(unit > 400){
        Amount = (unit - 400) * 13;
        unit = 400;
    }
    if (unit > 200 ){
        Amount += (unit - 200)*8;
        unit = 200;
    }
    if (unit > 100 ){
        Amount += (unit - 100)*6;
        unit = 100;
    }
    if (unit > 0 ){
        Amount += (unit - 0)*4.2;
        unit = 0;
    }
    console.log(Amount);
    rl.close();
})