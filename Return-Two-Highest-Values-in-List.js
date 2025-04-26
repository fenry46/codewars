// [4, 10, 10, 9]  =>  [10, 9]
// [1, 1, 1]  =>  [1]
// []  =>  []

// function twoHighest(arr) {
//     const unique = [...new Set(arr)];
//     unique.sort((a, b) => b - a);     // Sort descending
//     return unique.slice(0, 2);        // Return first two
// }

function twoHighest(array) {
    if (array.length < 2) {
        return array;
    }

    let highest = 0;
    let secHighest = 0;

    for (let i = 0; i < array.length; i++) {
        const exs = array[i];
        if (exs > highest) {
            secHighest = highest;
            console.log(secHighest)
            highest = exs;
        } else if (exs < highest && exs > secHighest) {
            secHighest = exs;
        }
    }

    if (secHighest === 0) {
        return [highest];
    }

    return [highest, secHighest];
}

console.log(twoHighest([15, 20, 20, 17]))
