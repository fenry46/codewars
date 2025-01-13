// function monkeyCount(n) {
//     const result = [];

//     for (let i = 1; i <= n; i++) {
//         result.push(i)
//     }
//     return result
// }

const monkeyCount = (n) => Array.from({ length: n }, (_, i) => i + 1)


console.log((monkeyCount(10)))