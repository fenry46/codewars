// function feast(beast, dish) {
//     return dish[0] === beast[0] && beast[beast.length - 1] === dish[dish.length - 1];
// }

const feast = (beast, dish) => dish.at(0) === beast.at(0) && beast.at(-1) === dish.at(-1);


console.log(feast("chickadee", "chocolate cake"))