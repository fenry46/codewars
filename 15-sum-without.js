// function sumArray(array) {
//     if (array === null || array.length <= 2) return 0;

//     const sorted = array.sort((a, b) => a - b)
//     let result = 0;
//     for (let i = 1; i < sorted.length - 1; i++) {
//         result += sorted[i]
//     }
//     return result;
// }

const sumArray = (array) => array === null || array.length <= 2 ? 0 : array.sort((a, b) => a - b).slice(1, -1).reduce((acc, cur) => acc + cur)

console.log(sumArray([6, 2, 10, 8, 10]));