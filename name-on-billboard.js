// function billboard(name, price = 30) {
//     return [...name].reduce(pre => pre + price, 0)
// }
function billboard(name, price = 30) {
    return name.split('').reduce((acc, current) => acc + price, 0)
}


console.log(billboard("Hadufuns John"))