<small>[Return Home](../../README.md)</small> | <small>[Return to Eloquent JS](index.md)</small>

# The Document Object Model 
* A live data structure (can be modified in real time)
  
`docum;ent.documentElement` is the root of the DOM

<img src="./../../images/dom_tree.jpg">

* The DOM wasn't designed for JS and tries to be a language-neutral interface. 
* There is no way to create a node and immediately add children or attributes to it
  * You have to creat it first, then add children, then attributes one by one

### Convert a collection of nodes into a JS Array
```javascript
let arrayish = {0: "one", 1: "two", length: 2};
let array = Array.from(arrayish);
console.log(array.map(s => s.toUpperCase()));
// → ["ONE", "TWO"]
```