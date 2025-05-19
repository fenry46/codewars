// const mergeArrays = (a, b) => [...new Set([...a, ...b].sort((a, b) => a - b))]

const mergeArrays = (a, b) => {
    const arr = a.concat(b).sort((num1, num2) => num1 - num2)

    let result = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            result.push(arr[i])
        }
    }
    return result
}


console.log(mergeArrays([2, 4, 5, 8], [2, 4, 4, 6]));