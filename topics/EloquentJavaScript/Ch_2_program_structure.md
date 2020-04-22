<small>[Return Home](../../README.md)</small> | <small>[Return to Eloquent JS](index.md)</small>


|Keyword | Definition|
|-------|------------|
|`Expression` | A fragment of code that produces a value
|`Side effects` | Changes internal state of the machine in a way that affects the statements that come after it
|`Environment`| Collection of bindings and their values that exist at a given time
|`Function`| Piece of program wrapped in a value. The values can be *applied* in order to run the wrapped program. 

### Bindings

```javascript
let caught = 5 * 5;
```
* `let` - Keyword
  * Indicates that this sentence is going to define a binding
* `caught` - Name of binding
* Result of 5*5 is set the binding

* A binding name can include `$` or `_` but no other special character

### Functions
* A lot of functions are useful because of the `side effects` they produce. 