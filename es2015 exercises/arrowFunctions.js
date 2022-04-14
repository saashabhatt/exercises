//Refactor some ES5 code into ES2015.
//ES5 Map Callback
/*function double(arr) {
  return arr.map(function(val) {
    return val * 2;
  });
}*/
function double (arr) {
    return arr.map((val) => val * 2);
}

//Refactor the above code to use two arrow functions. Turn it into a one-liner.
const douBle = (arr) => arr.map((val) => val *2);  

//Refactor the following function to use arrow functions:
/*function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
  }*/
const squareAndFindEvens = (numbers) => {
    const squares = numbers.map((num) => num **2);
    const even = squares.filter((square) => square % 2 === 0);
    return even;
}