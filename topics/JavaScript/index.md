<small>[Return Home](../../README.md)</small>

# ES6/Javascript

<u>Local links</u>

- [Useful helper methods](./helperMethods.md)

```javascript
const { provider: management } = this.state.filter;
```

> Note: All this does is renames the prop.

#### Spreading list arguements

```javascript
const avg = (...args) => {
  let sum = 0;
  for (let num of args) {
    sum += num;
  }

  return sum / args.length;
};

console.log(avg(2, 3, 4, 5));
```

You can reuse this method passing in an array by doing one of two things:

```javascript
const numbers = [ 5, 7, 9, 2];
console.log(avg.apply(null, numbers));
console.log((avg(...numbers));
//both these methods regurn the same thing
```

#### Prototypes

Create extension methods for things like the object `string`:

```javascript
let s = "Simon";

String.prototype.reversed = function () {
  let r = "";
  for (let i = this.length - 1; i >= 0; i--) {
    r += this[i];
  }
  return r;
};

console.log(s.reversed());
console.log("This can now be reversed".reversed());
```

#### Closure

Good resource: [How do javascript closures work](https://stackoverflow.com/questions/111102/how-do-javascript-closures-work")

```javascript
const makeAdder = (a) => {
  return function (b) {
    return a + b;
  };
};

const add5 = makeAdder(6);
const add20 = makeAdder(20);
console.log(add5(7));
console.log(add20(1));
```

- JS is a dynamically typed language
  - Waits until a variable is used or a function is called while a program is actually running to check and see if the types are correct
- There are no explicit types
- JS is interpreted, not compilled
  - You do not ever need to compile it
  - Code is scanned as it is run and the computer interprets the code on the fly
  - Nothing forces you to check the syntax before deploying the program.

Running JS using Node:

```shell
node sample.js
```

Skeleton HTML page to load JS:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>title</title>
  </head>
  <body>
    <script src="yourscript.js"></script>
  </body>
</html>
```

Setting a html element equal to a JS variable:

```javascript
document.getElementById("result1").textContent;
```

Primitive types: number, bools, string, undefined, null

Complex types: function, object

### Higher Order Functions

- Functions that take in a function as an argument or return a function as a result

Example:

```javascript
function forE(a, work) {
  for (var i = 0; i < a.length; i++) {
    work(a[i]);
  }
}
```

- This mimics what the `forEach` extension method does. Takes in an array, takes in a function that will _do work_ on each element of the array.

Returning a function:

```javascript
// function declaration
function toTheN(n) {
  return function (x) {
    return Math.pow(x, n);
  
  // or using arrow notation
  const toTheN = (n) => (x) => Math.pow(x, n);
}

let square = toTheN(2);
let toTheThird = toTheN(3);
console.log(square(2)); // Returns: 4
console.log(toTheThird(2)); // Returns: 8
```

### Debugging

TIP: Add the keyword `debugger` to create a breakpoint that will be run to in the chrome debugger. 

## Callback

>A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

```javascript
function greeting(name) {
  alert('Hello ' + name);
}

function processUserInput(callback) {
  var name = prompt('Please enter your name.');
  callback(name);
}

processUserInput(greeting);
```
* Synchronous callback shown here, as it is executed immediately

```javascript
setTimeout(() => taskOne(taskTwo), 2000);

function taskOne (taskTwo) {
  console.log("task 1");
  taskTwo();
};

function taskTwo () {
  console.log("task 2");
};
```
* If you know that task one will take time before it is resolved, the only way, without promises, to make sure that task two will run after task one is to pass it in to task one and then invoke it inside of task one. 