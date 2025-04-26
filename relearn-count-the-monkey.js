//10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//1 --> [1]
// function monkeyCount(n) {
//     // your code here
//     const result = []
//     for (let i = 1; i <= n; i++) {
//         result.push(i)
//     }
//     return result;
// }

const monkeyCount = (n) => {
    return Array.from({ length: 5 }, (_, i) => i + 1)
}



console.log(monkeyCount(10))