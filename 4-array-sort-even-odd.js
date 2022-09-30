//#4. Sort array with numbers - even(asc) then odd(dsc)
//   [4, 5, 3, 6, 7, 1, 2, 9, 8] => [2, 4, 6, 8, 9, 7, 5, 3, 1]

function sortArray(arr) {
  const evenNum = arr.filter((item) => item % 2 === 0);
  const oddNum = arr.filter((item) => item % 2 !== 0);

  return [...evenNum.sort((a, b) => a - b), ...oddNum.sort((a, b) => b - a)];
}

//Test data
console.log(sortArray([4, 5, 3, 6, 7, 1, 2, 9, 8]));
console.log(sortArray([-1, 5, 3, 6, -7, 1, 14, 19, 28, -2]));
