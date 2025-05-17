function countPositivesSumNegatives(input) {
    if (!input || input.length === 0) return [];

    result = [0, 0];

    for (let i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            result[0] += 1
        } else {
            result[1] += input[i]
        }
    }

    return result
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))