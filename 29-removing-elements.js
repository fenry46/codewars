// function removeEveryOther(arr){
//   //your code here
//   const result = [];
//   for(let i =0; i< arr.length; i += 2){
//     result.push(arr[i]);
//   }

//   return result;

// }

  const removeEveryOther=(arr) => arr.filter((el , index) => index %2 === 0);



console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))