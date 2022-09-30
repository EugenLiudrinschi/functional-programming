//#3. Implement Object deep clone

//Option 1
//Copying objects using JSON.stringify and JSON.parse
//This way don't work for functions or Symbols
const obj = {
  name: "Eugene",
  age: 32,
  language: {
    russian: true,
    romanian: true,
    english: true,
    french: false,
  },
};

console.log("obj: ", obj);

const objCopy = JSON.parse(JSON.stringify(obj));

console.log("objCopy: ", objCopy);

//Test data
objCopy.language.french = true;
console.log("unedited obj: ", obj);
console.log("edited objCopy: ", objCopy);

//Option 2
//Copying objects using recursion
const cloneObj = (obj) => {
  if (obj === null) return null;

  let clone = Object.assign({}, obj);

  Object.keys(clone).forEach((key) => {
    clone[key] =
      typeof clone[key] === "object" ? cloneObj(clone[key]) : clone[key];
  });

  if (Array.isArray(obj)) {
    clone.length = obj.length;
    return Array.from(clone);
  }
  return clone;
};

//Test data
const obj1 = {
  name: "Eugen",
  age: 32,
  language: {
    english: true,
    french: false,
  },
  hobby: ["footbal", "pcGames", "walking", ["false", "true"]],
};

const obj2 = cloneObj(obj1);

obj2.language.french = true;
obj2.hobby[1] = "reading";
obj2.age = 40;
obj2.hobby[3][1] = "false";

console.log("obj1: ", obj1);
console.log("obj2: ", obj2);

//Option 3
//We can use method _.cloneDeepWith(value) from Lodash library, which recursively clones value
