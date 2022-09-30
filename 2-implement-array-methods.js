//#2. Implement methods map, filter, every, some, find, indexOf with reduce()
//Test data
const arr = [1, 2, 3, 4, 5, 6, 7];
const arr1 = ["apple", "blueberry", "banana", "kiwi"];

//Implemeting custom Map function
const customMap = function (callback) {
  const result = [];

  this.reduce((acc, cur, i, arr) => {
    result[i] = callback(cur, i, arr);
  }, 0);

  return result;
};

Array.prototype.customMap = customMap;

//Testing custom Map
console.log(arr.customMap((item) => item + 1));
console.log(arr.customMap((item) => Math.pow(item, 2)));

//Implemeting custom Filter function
const customFilter = function (callback) {
  let result = [];

  this.reduce((acc, cur, i, arr) => {
    if (callback(cur, i, arr)) {
      result = [...result, cur];
    }
  }, 0);

  return result;
};

Array.prototype.customFilter = customFilter;

//Testing custom Filter
console.log(arr.customFilter((item) => item % 2 !== 0));
console.log(arr1.customFilter((item) => item[0] === "b"));

//Implemeting custom Every function
const customEvery = function (callback) {
  let value = true;

  this.reduce((acc, cur, i, arr) => {
    if (!callback(cur, i, arr)) {
      value = false;
    }
  }, 0);

  return value;
};

Array.prototype.customEvery = customEvery;

//Testing custom Every
console.log(arr1.customEvery((item) => typeof item === "string"));
console.log(arr1.customEvery((item) => item[0] === "f"));
console.log(arr.customEvery((item) => typeof item === "number"));
console.log(arr.customEvery((item) => item === 3));
console.log(arr.customEvery((item) => item < 10));

//Implemeting custom Some function
const customSome = function (callback) {
  let value = false;

  this.reduce((acc, cur, i, arr) => {
    if (callback(cur, i, arr)) {
      value = true;
    }
  }, 0);

  return value;
};

Array.prototype.customSome = customSome;

//Testing custom Some
console.log(arr1.customSome((item) => typeof item === "number"));
console.log(arr1.customSome((item) => item[0] === "a"));
console.log(arr.customSome((item) => typeof item === "string"));
console.log(arr.customSome((item) => item === 3));
console.log(arr.customSome((item) => item > 10));

//Implemeting custom Find function
const customFind = function (callback) {
  let result = [];

  this.reduce((acc, cur, i, arr) => {
    if (callback(cur, i, arr)) {
      result = [...result, cur];
    }
  }, 0);

  return result[0];
};

Array.prototype.customFind = customFind;

//Testing custom Find
console.log(arr.customFind((item) => item > 10));
console.log(arr.customFind((item) => item > 3));
console.log(arr1.customFind((item) => item.includes("wi")));
console.log(arr1.customFind((item) => item.includes("tr")));

//Implemeting custom indexOf function
const customIndexOf = function (value) {
  let index = -1;

  this.reduce((acc, cur, i, arr) => {
    if (cur === value) {
      index = i;
    }
  }, 0);

  return index;
};

Array.prototype.customIndexOf = customIndexOf;

//Testing custom indexOf
console.log(arr1.customIndexOf("banana"));
console.log(arr.customIndexOf(6));
console.log(arr.customIndexOf(8));
