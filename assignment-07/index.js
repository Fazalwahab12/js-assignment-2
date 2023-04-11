// 7. Write a function that retrieves an object from localStorage. The function
// should take one argument, which is a string representing the key used to
// store the object. The function should return the object.

function getObjectFromLocalStorage(key) {
    const storedValue = localStorage.getItem(key);
    if (!storedValue) {
      return null;
    }
    try {
      const parsedValue = JSON.parse(storedValue);
      return parsedValue;
    } catch (e) {
      console.error(`Unable to parse stored value for key '${key}'`, e);
      return null;
    }
  }
  const myObject = getObjectFromLocalStorage('myKey');
console.log(myObject);