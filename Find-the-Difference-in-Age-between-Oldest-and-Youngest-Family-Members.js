// function differenceInAges(ages) {
//     let minNumber = ages[0];
//     let maxNumber = ages[0];
//     for (let i = 0; i < ages.length; i++) {
//         if (ages[i] < minNumber) {
//             minNumber = ages[i]
//         }
//         if (ages[i] > maxNumber) {
//             maxNumber = ages[i]
//         }
//     }

//     return [minNumber, maxNumber, maxNumber - minNumber]
// }
const differenceInAges = (ages) => [Math.min(...ages), Math.max(...ages), Math.max(...ages) - Math.min(...ages)]



console.log(differenceInAges([82, 15, 6, 38, 35]))