// // var str = "My name is John";
// // var words = str.split(" ");
// // console.log(words);
// //output:

// var str = "My".concat("name", "is", "John");
// console.log(str);

function splitAndMerge(string, separator) {
    return string.split(' ').map((word) => word.split('').join(separator)).join(' ')
}

// splitAndMerge("My name is John", "-")  ==  "M-y n-a-m-e i-s J-o-h-n"

console.log((splitAndMerge("My name is John", "-")))