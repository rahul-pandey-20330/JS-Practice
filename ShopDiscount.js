//calculate the final amount after discount of the shop
//  Amount          Discount
// 0 - 5000            0%
// 5001 - 7000         5%
// 7001 - 9000         10%
// morethan 9000       20%
let readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});
rl.question("Enter Final Amount",(Amount)=>{
    let discount = 0;
if(Amount>0 && Amount<=5000){
    discount =0;
}
else if(Amount>5000 && Amount<=7000){
    discount = 5
}
else if(Amount>7000 && Amount<=9000){
    discount = 10
}
else if(Amount>9000){
    discount = 20
}
FinalAmount = Amount - Math.floor(Amount * discount)/100;
console.log(FinalAmount);
rl.close();
})