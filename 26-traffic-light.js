// function updateLight(current) {
//     if (current === 'green') return 'yellow'
//     if (current === 'yellow') return 'red'
//     return 'green'
// }

// const updateLight = (current) => current === 'green' ? 'yellow' : current === 'yellow' ? 'red' : 'green';


// const rules = {
//     green: 'yellow',
//     yellow: 'red',
//     red: 'green'
// }
// function updateLight(current) {
//     return rules[current]
// }


const updateLight = (current) => ({
    green: 'yellow',
    yellow: 'red',
    red: 'green'
})[current]


console.log(updateLight('green'))