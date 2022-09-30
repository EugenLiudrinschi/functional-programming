//#1. Create a function which sorts array of objects
//   [{name: 'name', age: 18}, {name: 'name', age: 18}] by name/age(asc/dsc) descending/ascending

const countries = [
  { name: "Moldova", degrees: 13 },
  { name: "Ecuador", degrees: 32 },
  { name: "Zambia", degrees: 40 },
  { name: "Iceland", degrees: -10 },
  { name: "Argentina", degrees: 27 },
];

function arrSort(arr, property) {
  function mySort(key) {
    let order = 1;

    if (key[0] === "-") {
      order = -1;
      key = key.slice(1);
    }

    return function (a, b) {
      if (a[key] < b[key]) {
        return -order;
      }

      if (a[key] > b[key]) {
        return order;
      }

      return 0;
    };
  }

  return arr.sort(mySort(property));
}

//Test data
console.log(arrSort(countries, "name"));
console.log(arrSort(countries, "-name"));
console.log(arrSort(countries, "degrees"));
console.log(arrSort(countries, "-degrees"));
