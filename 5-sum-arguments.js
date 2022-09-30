//#5. Create a function which gets as arguments an array of numbers
//   ex. [2, 1, 4, 5, 6, 7, 2, 3, 4] and 'K' that is a number.
//   Function should return indexes of 2 numbers from array that in sum
//   will be equal to K (first pair of indexes). Indexes should be different.
//   In case if there's no match, function should return an empty array
function getClosestSumElements(array, num) {
  if (!Array.isArray(array)) {
    return "First argument must be Array";
  }

  //Check if array length greater than 2
  if (array.length < 2) {
    return [];
  }

  //Implemeting logic
  let result = [];
  //Copying incoming array to stop mutating it with splice
  const newArray = [...array];

  newArray.reduce((acc, cur, i, arr) => {
    if (cur > num) {
      result = [];
    }
    if (arr.includes(num - cur) && i !== arr.indexOf(num - cur)) {
      result.push(i);
      result.push(arr.indexOf(num - cur));
      //Stop reduce with splice method
      arr.splice(1);
    }
  }, 0);

  return result;
}

let arr = [2, 1, 4, 5, 6, 7, 2, 4];

console.log(getClosestSumElements(arr, 7));
console.log(getClosestSumElements(arr, 3));
console.log(getClosestSumElements(arr, 100));
