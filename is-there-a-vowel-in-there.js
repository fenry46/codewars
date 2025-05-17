function isVow(a) {
    let result = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] == 97) {
            result.push("a")
        } else if (a[i] == 105) {
            result.push("i")
        } else if (a[i] == 117) {
            result.push("u")
        } else if (a[i] == 101) {
            result.push("e")
        } else if (a[i] == 111) {
            result.push("o")
        } else {
            result.push(a[i])
        }
    }
    return result; // your code here
}


console.log(isVow([118, 117, 120, 121, 117, 98, 122, 97, 120, 106, 104, 116, 113, 114, 113, 120, 106]))