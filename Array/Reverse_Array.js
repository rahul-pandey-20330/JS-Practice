let arr = [-1,-2,3,4,-5,-6];
let i=1,j=1;
while(i<arr.length){
    if(arr[i]<0){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        j++
    }
    i++;
}
console.log(arr);
// function move(){
//     let count = 0;
//     let i =1,j=1;
//     for(i =1;i<arr.length;i++){
//         if(arr[i]<0){
//             count++;
//         }
//     }
//     console.log(count);
//     for (j =1;j<arr.length;j++){
//         if(j>0){
//             arr[j] = arr[i]
//         }
//         else{
//             arr[j] = count;
//         }
//     }
//     return arr;
    
// }
// console.log(move());
