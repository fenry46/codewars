// (bigToSmall([[1,2],[3,4],[5,6]]) , "6>5>4>3>2>1");
function bigToSmall(arr) {
    let result = []
    //coding here...
    result = result.concat(...arr)
    for (let i = 0; i < result.length; i++) {
        for (let j = i + 1; j < result.length; j++) {
            if (result[i] < result[j]) {
                let temp = result[i];
                result[i] = result[j];
                result[j] = temp;
            }
        }
    }
    return result.join(">")
}


console.log(bigToSmall([[1, 2], [3, 4], [5, 6]]))