// function rentalCarCost(d) {
//     if (d >= 7) return (d * 40) - 50
//     if (d >= 3) return (d * 40) - 20
//     return d * 40
// }

const rentalCarCost = (d) => d * 40 - (d >= 7 ? 50 : d >= 3 ? 20 : 0)


console.log(rentalCarCost(6))