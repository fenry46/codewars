// function nameShuffler(str) {
//     //Shuffle It
//     let firstName = '';
//     let lastName = '';
//     let spaceFound = false;

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === " ") {
//             spaceFound = true;
//             continue
//         }
//         if (!spaceFound) {
//             firstName += str[i]

//         } else {
//             lastName += str[i]
//         }
//     }

//     return lastName + " " + firstName
// }
// function nameShuffler(str) {
//     // return str.split(" ").reverse().join(" ");
//     const [first, last] = str.split(" ");
//     return last + " " + first
// }

const nameShuffler = (str) => str.split(" ").reverse().join(" ");



console.log(nameShuffler('john McClane'))