Compares infinitely deep objects:
```javascript
const deepEqual = (obj1, obj2) => {
  if (obj1 === null || obj2 === null) {
    return obj1 === obj2;
  }
  if (typeof obj1 !== "object" || typeof obj2 !== "object") {
    return obj1 === obj2;
  }
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  let areEqual = true;
  for (let prop in obj1) {
    if (typeof obj1[prop] === "object" && typeof obj2[prop] === "object") {
      if (!deepEqual(obj1[prop], obj2[prop])) {
        areEqual = false;
      } else {
        continue;
      }
    }
    if (obj1[prop] !== obj2[prop]) {
      areEqual = false;
    }
  }

  return areEqual;
};
```