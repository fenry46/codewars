// function points(games) {
//     let result = 0;
//     for (let i = 0; i < games.length; i++) {
//         if (games[i][0] > games[i][2]) {
//             result += 3;
//         } else if ((games[i][0] === games[i][2])) {
//             result += 1;
//         }

//     }

//     return result
// }

const points = (games) => result = games.reduce((acc, [x, _, y]) => (x > y ? 3 : x < y ? 0 : 1) + acc, 0);



console.log(points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"]))