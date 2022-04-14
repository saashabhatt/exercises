/*Given this function:
function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function(num) {
    return num % 2 === 0
  });
}
Refactor it to use the rest operator & an arrow function:*/

const filterOutOdds = (...nums) => {
    return nums.filter((num) => {
        return num % 2 === 0;
    });
}

//Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.
//Make sure to do this using the rest and spread operator.
const findMin = (...nums) => Math.min (...nums);

//Write a function called mergeObjects that accepts two objects and returns a new object which contains all the 
//keys and values of the first object and second object.
//mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

//Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. 
//The function should return a new array with the original array values and all of additional arguments doubled.
//doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
//doubleAndReturnArgs([2],10,4) // [2, 20, 8]

const doubleAndReturnArgs = (arr, ...vals) => [...arr, ...vals].map((val) => val * 2);
//Slice and Dice!
//For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!

//Make sure that you are always returning a new array or object and not modifying the existing inputs.
/** remove a random element in the items array
and return a new array without that item. */
const removeRandom = (...items) => {
    let newItems = [...items];
    newItems.splice(Math.floor(Math.random() * newItems.length), 1);
    return newItems
}

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => [...array1, ...array2];

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => { 
    const obj1 = { ...obj, [key]: val};
    return obj1
}


/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
    delete obj[key];
    return obj;
}


/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
    const obj3 = { ...obj1, ...obj2};
    return obj3
}


/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
    const obj3 = { ...obj, [key]: val};
    return obj3;
}


