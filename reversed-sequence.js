// const reverseSeq = n => {
//     const array = [];
//     for( let i = n; i>= 1; i--){
//         array.push(i)
//     }            
//     return array;
// };

const reverseSeq = n => Array(n).fill().map((el, index )=> n - index);

console.log(reverseSeq(5))