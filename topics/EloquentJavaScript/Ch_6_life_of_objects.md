<small>[Return Home](../../README.md)</small> | <small>[Return to Eloquent JS](index.md)</small>

## Secret Life of Objects

| Keyword                       | Definition                                                                                                                                                                                                                                                |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Object oriented programming` | A set of techniques that use objects (and related concepts) as the central priciple of program organization                                                                                                                                               |
| `Encapsulation`               | Dividing programs into smaller pieces and make each piece responsible for managing its own state                                                                                                                                                          |
| `Interfaces`                  | Limited sets of functions or bindings that provide useful functionality at a more abstract level, hiding their precise implementation                                                                                                                     |
| `Methods`                     | Properties that hold function values                                                                                                                                                                                                                      |
| `Prototype`                   | Another object that is used as a fallback source of properties                                                                                                                                                                                            |
| `Classes`                     | Defines the shape and type of an object--what methods and properties it has.                                                                                                                                                                              |
| `Instance`                    | An object derived form a class definition.                                                                                                                                                                                                                |
| `Polymorphism`                | When code is written tow ork with objects that have a certain interface, any kind of object that supports the interface can be plugged into the code and work. Can work with values of different shapes, as long as it supports the interface it expects. |
| `Inheritance`                 | New calss inherits properties and behavior from the old class                                                                                                                                                                                             |

### Encapsulation

- Knowledge about the way a piece of the program works can be kept local ot that piece.
  - Someone working on the rest of the program does not have to remember or be aware of that knowledge.
- Properties part of the interface are called `public`, things which outside code should not touch are `private`
  - This is not in regular JS yet
  - It is common to name properties with `_prop` to indicate a private property
- Seperates the interface from implementation

### Methods

- Properties that hold function values
- Arrow functions don't bind their own `this` but can see the `this` binding of the scope around them.

```javascript
function normalize() {
  console.log(this.coords.map((n) => n / this.length));
}
```

- This code would not work using the `function` keyword

### Prototypes

- Another object that is used as a fallback source of properties, most objects have these
  - When an object gets a request for a property that it does not have,m its prototype will be searched for the property, then the prototype's prototype ect.
  - The entity behind almost all objects is `Object.prototype`

```javascript
console.log(Object.getPrototypeOf({}) == Object.prototype);
// -> true
```

- Functions derive from the Function.prototype, arrays derive from Array.prototype

- The prototype acts as a container for all the properties that are shared by that object. The object itself contains properties that only apply to itself, and dervies shared properties from its prototype.

### Classes

- Prototypes are useful in defining properties for which all instances of a class share the same value, such as methods.
- To create an instance of a class you have to make sure it has the properties that instances of the class are supposed to have, this is what the `constructor` function does.
- Class declarations currently only allow methods, properties that hold functions, to be added to the prototype.

### Map

- Key, value pairs

### Polymorphism

- When code is written tow ork with objects that have a certain interface, any kind of object that supports the interface can be plugged into the code and work. Can work with values of different shapes, as long as it supports the interface it expects.
- A for/of loop that expects a interface can work with many different types of objects that support the interface. This is an example of polymorphism.

### Symbols

- Property names can be `symbols`.
- `Symbols` are values created with the `Symbol` function.
- Newly created symbols are unique, you cnanot create the same symbol twice.
- Good for defining interfaces that can live alongside properties no matter what their names are.

```javascript
const toStringSymbol = Symbol("toString");
Array.prototype[toStringSymbol] = function () {
  return `${this.length} cm of blue yarn`;
};

console.log([1, 2].toString());
// → 1,2
console.log([1, 2][toStringSymbol]());
// → 2 cm of blue yarn
```

### Iterator interface

- The object given to a for/of loop is expected to be `iterable`, this means it has a method with the `Symbol.iterator` symbol (a symbol defined by the language, stored as a property of the Symbol function).
  - When called, the method should return an object that provides a second interface, `iterator`.

### Getters, setters, and statics

```javascript
  get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }
  set fahrenheit(value) {
    this.celsius = (value - 32) / 1.8;
  }

  static fromFahrenheit(value) {
    return new Temperature((value - 32) / 1.8);
  }
};
```

### Inheritance

```javascript
class SymmetricMatrix extends Matrix {
  constructor(size, element = (x, y) => undefined) {
    super(size, size, (x, y) => {
```

- Must call `super` to initialize the parent's constructor
- Super provides a way to call methods aas they were defined in the superclass

```javascript
  set(x, y, value) {
    super.set(x, y, value);
    if (x != y) {
      super.set(y, x, value);
    }
  }
```
