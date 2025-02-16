// function correct(string) {
//     result = '';
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] === "5") {
//             result += "S"
//         } else if (string[i] === "0") {
//             result += "O"
//         } else if (string[i] === "1") {
//             result += "I"
//         } else {
//             result += string[i];
//         }
//     }
//     return result
// }

function correct(string) {
    return string.split('').map((char) => {
        if (char === '5') return 'S'
        if (char === '1') return 'I'
        if (char === '0') return 'O'
        return char
    }).join('')
}


console.log(correct("L0ND0N"))
