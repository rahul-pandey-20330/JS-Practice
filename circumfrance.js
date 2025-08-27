// write a circumfrance of circle
let readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});
rl.question("Enter the radius of circle : ",(radius)=>{
area = 2 * Math.PI * radius;
console.log(area);
rl.close();
})