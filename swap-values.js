function swapValues(arr) {
    // var args = Array.prototype.slice.call(arguments);
    var temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
    return arr
}


console.log(swapValues([1, 2]))