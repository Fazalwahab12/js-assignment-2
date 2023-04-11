
// 2. Write a recursive function that searches an array for a specific value. The
// function should return true if the value is found, and false if it is not. You
// can assume that the array is not nested.
let myArray = [1, 2, 3, 4, 5];
let searchValue = 6;
function searchArray(arr, val) {
    if (arr.length === 0) {
      return false;
    } else if (arr[0] === val) {
      return true;
    } else {
      return searchArray(arr.slice(1), val);
    }
  }
  
if (searchArray(myArray, searchValue)) {
  console.log(`The value ${searchValue} was found in the array!`);
} else {
  console.log(`The value ${searchValue} was not found in the array.`);
}