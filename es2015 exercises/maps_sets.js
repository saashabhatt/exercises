/*
Quick Question #1
What does the following code return?

new Set([1,1,2,2,3,4])
//  {1, 2, 3, 4}

Quick Question #2
What does the following code return?

[...new Set("referee")].join("")
//'ref'

Quick Questions #3
What does the Map m look like after running the following code?

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
//{Array(3) => true, Array(3) => false}

hasDuplicate
Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate
*/
const hasDuplicate = (arr) => {
    const newS = new Set(arr);
    return (newS.size !== arr.length)
}

//vowelCount
//Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values
// are the count of the vowels in the string.
function isVowel (char) {
    return ['aeiou'].includes(char);
}

function vowelCount(str){
    const countMap = new Map();
    for(let val of str){
      let strToLC = val.toLowerCase()
      if(isVowel(strToLC)){
        if(countMap.has(strToLC)){
          countMap.set(strToLC, countMap.get(strToLC) + 1);
        } else {
          countMap.set(strToLC, 1);
        }
      }
    }
    return countMap;
  }
  