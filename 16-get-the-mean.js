// function getAverage(marks) {
//     //TODO : calculate the downward rounded average of the marks array
//     let result = 0;
//     for (let i = 0; i < marks.length; i++) {
//         result += marks[i] / marks.length;
//     }

//     return Math.floor(result)
// }

const getAverage = (marks) => Math.floor(marks.reduce((acc, curr) => acc + curr) / marks.length)


console.log(getAverage([1, 2, 3, 4, 5,]))