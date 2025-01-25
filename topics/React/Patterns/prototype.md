https://www.patterns.dev/posts/prototype-pattern

# Prototype pattern

- Allows us to easily access and inherit properties from other objects.
- Share properties among many objects of the same type.
- The prototype is an object that's native to JS, and can be accessed by objects through the prototype chain.

```js
class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    return `Woof!`;
  }
}

const dog1 = new Dog("Daisy");
const dog2 = new Dog("Max");
const dog3 = new Dog("Spot");
```

- All properties that are defined on the class itself, (in this example `bark`) are added automatically to the `prototype`.

```js
console.log(Dog.prototype);
// constructor: ƒ Dog(name, breed) bark: ƒ bark()

console.log(dog1.__proto__);
// constructor: ƒ Dog(name, breed) bark: ƒ bark()
```

* Should use this with objects that should have access to the same properties. 

Can even add to the prototype after creating instances

```js
class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    return `Woof!`;
  }
}

const dog1 = new Dog("Daisy");
const dog2 = new Dog("Max");
const dog3 = new Dog("Spot");

Dog.prototype.play = () => console.log("Playing now!");

dog1.play(); //Playing now!
```
