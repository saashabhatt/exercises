// Foreach exercises
// Write a function called doubleValues which accepts an array and returns a new array 
//with all the values in the array passed to the function doubled

function doubleValues (sampleArray) {
    let newArray = [];
    sampleArray.forEach(element => {
        newArray.push(element * 2);
       })
       return newArray;;
}

//Write a function called onlyEvenValues which accepts an array and returns a new array with 
//only the even values in the array passed to the function

function onlyEvenValues (anArray) {
    let newArray = [];
    anArray.forEach((element,i) => {
        if (anArray[i] % 2 === 0) {
            newArray.push(element);
        }
    })
    return newArray;
}

// Write a function called showFirstAndLast which accepts an array of strings and returns a new array 
//with only the first and last character of each string.
function showFirstAndLast (arr) {
    let newArray = [];
    arr.forEach(value => {
        let first = value[0];
        let last = value[(value.length - 1)];
        let str = first + last;
        newArray.push(str);
    })
    return newArray;
}

// Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and 
//returns the array passed to the function with the new key and value added for each object
function addKeyAndValue (arr, key, value) {
    arr.forEach (function (val) {
        val[key] = value;
    })
    return arr;
}

//Write a function called vowelCount which accepts a string and returns an object with the 
//keys as the vowel and the values as the number of times the vowel appears in the string. 
//This function should be case insensitive so a lowercase letter and uppercase letter should count. 
function vowelCount(str) {
    let newstr = str.split('');
    let obj = {};
    const vowels = "aeiou";
    newstr.forEach(function (val) {
        let term = val.toLowerCase();
        if (vowels.indexOf(term) !== -1) {
            if (obj[term]) {
                obj[term]++;
            }
            else {
                obj[term] = 1;
            }
        }
    });
    return obj;
}

/*function vowelCount (anyString) {
    let newString = anyString.toLowerCase(); 
    let arr = newString.split('');
    let vowelObject = {
        'a': 0,
        'e': 0,
        'i': 0,
        'o': 0,
        'u': 0
    };
    arr.forEach(element => {
        if (element === 'a') {
            vowelObject['a']++;
        }
        else if (element === 'e') {
            vowelObject['e']++;
        }
        else if (element === 'i') {
            vowelObject['i']++;
        }
        else if (element === 'o') {
            vowelObject['o']++;
        }
        else if (element === 'u') {
            vowelObject['u']++;
        }    
    })
    return vowelObject;
}*/

//MAP Exercises
//Write a function called doubleValuesWithMap which accepts an array and returns a new array 
//with all the values in the array passed to the function doubled
function doubleValuesWithMap (arr) {
    return arr.map(function(value) {
        return value * 2;
    })
}

//Write a function called valTimesIndex which accepts an array and returns a new array 
//with each value multiplied by the index it is currently at in the array.
function valTimesIndex (arr) {
    return arr.map (function(val, index) {
        return val * index;
    })
}

//Write a function called extractKey which accepts an array of objects and some key and returns a new array 
//with the value of that key in each object.
function extractKey (arr, str) {
    return arr.map (function (value) {
        return value[str];
    })
}

//Write a function called extractFullName which accepts an array of objects and returns a new array 
//with the value of the key with a name of “first” and the value of a key with the name of “last” in each object, 
//concatenated together with a space.
function extractFullName (arr) {
    return arr.map (function (val) {
        return val.first + ' ' + val.last;
    })
}


//Filter Exercises
//Write a function called filterByValue which accepts an array of objects 
//and a key and returns a new array with all the objects that contain that key.
function filterByValue (arr, key) {
    return arr.filter (function (val) {
        return val[key];
    }) 
}

//Write a function called find which accepts an array and a value and returns the first element in the array 
//that has the same value as the second parameter or undefined if the value is not found in the array.
function find (arr, value) {
    return arr.filter (function (val) {
        return val === value;
    }) [0];
}

//Write a function called findInObj which accepts an array of objects, a key, and some value to search 
//for and returns the first found value in the array.
function findInObj (arr, key, value) {
    return arr.filter (function(val) {
        return val[key] === value;
    })[0];
}

//Write a function called removeVowels which accepts a string and returns a new string with all of the vowels 
//(both uppercased and lowercased) removed. Every character in the new string should be lowercased.
const isNotVowel = function (char) {
    return 'aeiou'.indexOf(char) === -1;
};


function removeVowels (str) {
    str = str.toLowerCase();
    let arr = Array.from(str);
    let newArr = arr.filter (function (value) {
        return isNotVowel(value);
    }); 
    return newArr.join("");
}

//Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd 
//numbers doubled (HINT - you can use map and fitler to double and then filter the odd numbers).

function doubleOddNumbers (arr) {
    let newArr = arr.filter (function (val) {
        return val%2 !== 0;
    });
    return newArr.map (function (val) {
        return val * 2;
    });
}
