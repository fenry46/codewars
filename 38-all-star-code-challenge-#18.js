// function strCount(str, letter) {    
//     let result = 0;
//     for (let i = 0 ; i <= str.length; i++){
//         if (letter === str[i]){
//             result++
//         }
//     }   
//     return result
// }

const strCount = (str, letter) =>  str.split(letter).length-1
console.log(strCount('Hello', 'o'));