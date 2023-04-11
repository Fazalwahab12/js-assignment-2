// 8. Write a function that takes an object and saves each property to
// localStorage using the property name as the key and the property value as
// the value. The function should also retrieve the object from localStorage
// and return it as a new object.
function saveObjectToLocalStorage(obj) {
    for (const [key, value] of Object.entries(obj)) {
      localStorage.setItem(key, JSON.stringify(value));
    }
    const newObj = {};
    for (const key of Object.keys(obj)) {
      const storedValue = localStorage.getItem(key);
      if (storedValue) {
        try {
          newObj[key] = JSON.parse(storedValue);
        } catch (e) {
          console.error(`Unable to parse stored value for key '${key}'`, e);
        }
      }
    }
    return newObj;
  }
  const myObj = { foo: 'bar', baz: 123 };
const storedObj = saveObjectToLocalStorage(myObj);
console.log(storedObj);