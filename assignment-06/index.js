// 6. Write a function that saves an object to localStorage. The function should
// take two arguments: the first argument is a string representing the key to
// use for storing the object, and the second argument is the object to store.


function saveObjectToLocalStorage(key, object) {
    localStorage.setItem(key, JSON.stringify(object));
  }
  const myObject = { name: "John", age: 30 };
saveObjectToLocalStorage("my-object", myObject);
const mySavedObject = JSON.parse(localStorage.getItem("my-object"));
console.log(mySavedObject); // { name: "John", age: 30 }