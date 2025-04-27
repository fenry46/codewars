// function uniTotal(string) {
//     let total = 0;
//     for (let i = 0; i < string.length; i++) {
//         total += string[i].charCodeAt();
//     }
//     return total;
// }

// const uniTotal = str => [...str].reduce((acc, char) => acc + char.charCodeAt(0), 0);

function uniTotal(string) {
    console.log([...string].reduce((acc, value) => acc + value.charCodeAt(0), 0))
}

console.log(uniTotal("testing"))