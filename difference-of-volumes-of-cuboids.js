// function findDifference(a, b) {
//     //loading...
//     let result = 1;
//     let resultb = 1;
//     for (let i = 0; i < a.length; i++) {
//         result *= a[i];
//         resultb *= b[i];
//     }
//     return result - resultb
// }

const findDifference = (a, b) => Math.abs(a.reduce((acc, currentValue) => acc * currentValue, 1) - b.reduce((acc, currentValue) => acc * currentValue, 1));



console.log(findDifference([27, 22, 5], [26, 27, 7]))