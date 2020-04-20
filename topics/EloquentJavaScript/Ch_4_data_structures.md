<small>[Return Home](../../README.md)</small> | <small>[Return to Eloquent JS](index.md)</small>

|Keyword | Definition|
|-------|------------|
|`Methods` | Properties that contain functions
|`Stack` | A data structure that allows you to push values into it and pop them out again in the opposite order (LIFO). 
|`Serialize`| Convert into a flat description

### Rest Parameters
* Useful for a function to accept any number of arguments. 

```javascript
function max(...numbers) {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}
console.log(max(4, 1, 9, -2));
// → 9
```

### JSON
* All property names have to be surrounded by double quotes, and only simple data expressions are allowed, no function calls, bindings or anything that involves actual computation. 

* `JSON.stringify` and `JSON.parse` converts data to and from this format. 