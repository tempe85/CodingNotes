https://www.patterns.dev/posts/mixin-pattern

# Mixin Pattern

- An object we can use in order to add reusable functionality to another object or class, without using inheritance.
  - Sole purpose is to _add functionality_, cannot be used on their own.

* Mixins were often used to add functionality to React components before the intro of ES6 classes. The React team discourages the use of mixins as it adds unnecessary complexity to a component, making it hard to maintain and reuse. Using HOCs instead or Hooks is often better

```js
class Dog {
  constructor(name) {
    this.name = name;
  }
}

const dogFunctionality = {
  bark: () => console.log("Woof!"),
  wagTail: () => console.log("Wagging my tail!"),
  play: () => console.log("Playing!"),
};

Object.assign(Dog.prototype, dogFunctionality);
```

- Mixins themselves can use inheritance.

```js
const animalFunctionality = {
  walk: () => console.log("Walking!"),
  sleep: () => console.log("Sleeping!"),
};

const dogFunctionality = {
  bark: () => console.log("Woof!"),
  wagTail: () => console.log("Wagging my tail!"),
  play: () => console.log("Playing!"),
  walk() {
    super.walk();
  },
  sleep() {
    super.sleep();
  },
};

Object.assign(dogFunctionality, animalFunctionality);
Object.assign(Dog.prototype, dogFunctionality);
```
