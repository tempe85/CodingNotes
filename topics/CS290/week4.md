<small>[Return Home](../../README.md)</small> | <small>[Return to CS 290](index.md)</small>

| Keyword   | Definition                                                                                                                                                                                                   |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `Scope`   | Where a variable can be accessed from                                                                                                                                                                        |
| `Context` | Where a method has been called from                                                                                                                                                                          |
| `this`    | When invoking a method of an object instance, it lets you access the properties of that object instance. Specifies who is responsible for calling a function. Refers to the functions execution context.     |
| `bind`    | Method of a function (since a function is an object in JavaScript). Let's us specify an execution context for a function and lets us fix an arbitrary number of the first arguments passed to that function. |
| `closure` | A closure is created everytime a function is called where that function defines an internal function                                                                                                         |

### Binding

- takes a function that has the same behavior as the old function, but it's context is fixed

```javascript
var newLog = console.log.bind(console);
```

- The context will ALWAYS be the console

```javascript
function forEach(a, work) {
  for (var i = 0; i < a.length; i++) {
    work(a[i]);
  }
}

var arr = [1, 2, 3];

//forEach(arr,console.log); <--- This will work.

var newLog = console.log.bind(console); //newLog now has the console.log function with a fixed context of console.

forEach(arr, newLog);
```

- Context has been fixed to the `console`.
- When passed in the log function loses the understanding that it's bound to the console. Loses the context that it's passed in.

### Execution Context

```javascript
let testObj = {
name: "big bir",
sayName: function(){ console.log(this.name)} // this works
sayName: function() { console.log(name)} // this does not work, name loses its context
}


testObj.sayName();
```

### Scope

- JS only has function scope using var. All variables declared within that function are all in scope within that function (even in functions of that function)
- Let, const allows for block scoped elements

```javascript
function closureMaker() {
  let n = 0;
  let inner = () => n++;
  let outer = () => {
    inner();
    return n;
  };
  return outer;
}

let outerClosure = closureMaker();
console.log("Call 1: " + outerClosure()); //Call 1: 1
console.log("Call 2: " + outerClosure()); //Call 2: 2
```

- When a function is called within another function a `closure` is generated.
  - This stores all the contents of the parent function more permanently so they can still be referenced by the functions defined within
- inner() and outer() can still access the variable `n`. `n` is incremented every time `outerClosure` is called.

```javascript
function generateFunctionList() {
  var fnArr = [];
  for (var i = 0; i < 3; i++) {
    fnArr[i] = function () {
      console.log(i);
    };
  }
  return fnArr;
}

var functionArray = generateFunctionList();
functionArray[0](); //Logs 3
functionArray[1](); //Logs 3
functionArray[2](); //Logs 3

//NOTE:
functionArray = [
  () => console.log(i),
  () => console.log(i),
  () => console.log(i),
];
```

- The reason all three indexes contain the same value of `i` is the same reason that in the previous example `n` incremented each time the amount incremented. In this example when you call `functionArray[0]()` the scoped `i` is incremented to 3. `i` in this instance is global scoped to the function and that reference is saved when called again. So the second time `i` starts at 3, not 0 (only the inner function is called, the loop is never referenced again). Note: If you use `let i = 0` this is not the case since `i` would be block scoped.

```javascript
function generateFunctionList() {
  var fnArr = [];
  for (var i = 0; i < 3; i++) {
    fnArr[i] = (function (x) {
      return function () {
        console.log(x);
      };
    })(i);
  }
  return fnArr;
}

var functionArray = generateFunctionList();
functionArray[0](); //Expect 0?
functionArray[1](); //Expect 1?
functionArray[2](); //Expect 2?
```

- In this instance, the function is immediately being invoked `fnArr[i] = function(x){...}(i)`, passing in `i` for the `x` parameter. Because it is being passed in like this, it saves that `i` to the scope of the inner function when it is run.
- When the function is invoked it immediately creates a closure that contains the value of `x` at that value of `i` at the time it was called. Every loop a new closure is created because the function is invoked.
- **A closure is created everytime a function is called where that function defines an internal function**
- Whenever you declare a function inside another function, the inside function(s) is/are recreated again each time the outside function is called.

  ### Constructors

  - A difference between C++ and JS is that JS 'classes' use a prototype.
    - If you call a method or request a property of an instance of an object and it can't be found there, JS will look at the prototype object ot see if the property exists there.

```javascript
Dvd.prototype.watch = function () {
  this.watchCount++;
  console.log("You watched " + this.title + ". That is a good movie!");
};
```

- `Object.create(thingToCreate)` creats a prototype chain.
- Prototypes creates things that exist within all version of the function/class

### Call Method

- A method of a function, but instead of creating a copy of the function (like `bind`) it calls it immediately with a specific execution context.

```javascript
function timeToWatch(freeTime) {
  return freeTime > this.length;
}

timeToWatch.call(myDvd, 200);
```

- The first argument _sets_ the context to myDvd. The following argument is the function's normal arguments (e.g. freetime)
