<small>[Return Home](../../README.md)</small>

# ES6/Javascript

### Object destructing

* You can use destructuring to gain access to a property in an object
```javascript
const { provider: management } = this.state.filter
```

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

String.prototype.reversed = function() {
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
const makeAdder = a => {
  return function(b) {
    return a + b;
  };
};

const add5 = makeAdder(6);
const add20 = makeAdder(20);
console.log(add5(7));
console.log(add20(1));
```