// function firstNonConsecutive (arr) {
//     let temp = arr[0];
//     for(let i = 1; i <arr.length; i++){
//         if ( arr[i] !== temp + 1){
//             return arr[i];
//         }
//         temp = arr[i];
//     }
//     return null
// }

function firstNonConsecutive(arr) {
    for (let i = 0; i < arr.length - 1; ++i) {
      if (arr[i] + 1 !== arr[i + 1]) {
        return arr[i + 1]
      }
    }
    return null
  }


console.log(firstNonConsecutive([0,1,4,5,4,5,6,7,8]))