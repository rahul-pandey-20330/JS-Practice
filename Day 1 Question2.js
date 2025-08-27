//Write A Program to Calculate Area Of Reactangle And Parameter Of Reactangle

let readline = require("readline");
let rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout 
});
rl.question("Enter Length Of Reactangle : ", (len)=>{
    rl.question("Enter Width Of Reactangle : ", (wid)=>{
        // convert into number
        let length = Number(len);
        let width = Number(wid);

        let area = length * width ;
        let Parameter =2* (length + width);
        console.log("Area Of Reactangle is ", area ,
            "\n Parameter of Reactangle is :", Parameter);
            rl.close();
    });
});
    
