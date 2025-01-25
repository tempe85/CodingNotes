https://www.patterns.dev/posts/module-pattern

# Module Pattern

- Allows you to split up your code into smaller, reusable pieces.
- Allows you to keep certain values within your file _private_.
  - Declarations within a module are scoped (_encapsulated_) to that module by default.
  - If a value is not exported, then it is not available outside of that module.
    - Reduces name collisions

## Dynamic Import

- In some cases, we only need to import a module based on a condition.

```js
import("module").then((module) => {
  module.default();
  module.namedExport();
});

// Or with async/await
(async () => {
  const module = await import("module");
  module.default();
  module.namedExport();
})();
```

In this example, the module is only added when a user clicks on the button:

```js
const button = document.getElementById("btn");

button.addEventListener("click", () => {
  import("./math.js").then((module) => {
    console.log("Add: ", module.add(1, 2));
    console.log("Multiply: ", module.multiply(3, 2));

    const button = document.getElementById("btn");
    button.innerHTML = "Check the console";
  });
});
```

This reduces page load time, and only comiple the code when it's needed by the user.

This can also be done by passing in template literals, in order to dynamically load modules based on a given value:

```js
const res = await import(`../assets/dog${num}.png`);
```
