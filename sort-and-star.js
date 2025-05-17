// function twoSort(s) {
//     let sort = s.sort()
//     sort = s[0];
//     result = ''
//     for (let i = 0; i < sort.length; i++) {
//         if (i === sort.length - 1) {
//             result += sort[i];
//         } else {
//             result += sort[i] + "***";
//         }
//     }
//     return result
// }

const twoSort = (s) => s.sort()[0].split('').join("***")


console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]))
