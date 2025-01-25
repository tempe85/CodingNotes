https://www.patterns.dev/posts/proxy-pattern

# PROY PATTERN

- A stand-in for someone/something else. Instead of interacting with an object directly, we interact with an object representing that object (proxy object).
- Can help with validation, formatting, notifications or debugging. 

```js
const person = {
  name: "John Doe",
  age: 42,
  nationality: "American",
};

const personProxy = new Proxy(person, {});
```

- Second argument of `Proxy` is an object tht represents the _handler_ (getters/setters).

```js
const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    if (!obj[prop]) {
      console.log(
        `Hmm.. this property doesn't seem to exist on the target object`
      );
    } else {
      console.log(`The value of ${prop} is ${obj[prop]}`);
    }
  },
  set: (obj, prop, value) => {
    if (prop === "age" && typeof value !== "number") {
      console.log(`Sorry, you can only pass numeric values for age.`);
    } else if (prop === "name" && value.length < 2) {
      console.log(`You need to provide a valid name.`);
    } else {
      console.log(`Changed ${prop} from ${obj[prop]} to ${value}.`);
      obj[prop] = value;
    }
  },
});
```

- Proxy's add **validation**.

  - Cannot change the age to a value type other than a number
  - Sets requirements length of name

- `Reflect` is an alternative to accessing object properties use bracket notation `obj[prop]`

```js
const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    console.log(`The value of ${prop} is ${Reflect.get(obj, prop)}`);
  },
  set: (obj, prop, value) => {
    console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
    Reflect.set(obj, prop, value);
  }
```
