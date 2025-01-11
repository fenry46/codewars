function stringToArray(string) {

    let newStr = "";
    let result = [];
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== " ") {
            newStr = newStr + string[i]
            console.log(newStr)
        }
        else {
            result.push(newStr);
            newStr = "";
        }
    }
    result.push(newStr);
    return result;
}

console.log(stringToArray(("Robin singh")))