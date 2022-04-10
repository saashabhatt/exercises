//Write a function called findUserByUsername which accepts an array of objects, each with a key of username, 
//and a string. The function should return the first object with the key of username that matches the string 
//passed to the function. If the object is not found, return undefined.
function findUserByUsername (arr, user) {
    return arr.find(function (val) {
        return val['username'] === user;
    });
}

//Write a function called removeUser which accepts an array of objects, each with a key of username, and 
//a string. The function should remove the object from the array and return this object. If the object is not found, 
//return undefined.
function removeUser (arr, user) {
    let indic = arr.findIndex(function(val) {
        return val['username'] === user;
        });
        if (indic === -1) return;
        return arr.splice(indic, 1)[0];
        
}
