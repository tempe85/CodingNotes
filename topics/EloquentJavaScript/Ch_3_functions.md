<small>[Return Home](../../README.md)</small> | <small>[Return to Eloquent JS](index.md)</small>

| Keyword               | Definition                                                                                                                                                                                                                             |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Function definition` | A regular binding where the value of the binding is a function                                                                                                                                                                         |
| `Lexical scoping`     | An approach to binding visibility where each local scope can see all the local scopes that contain it, and all scopes can see the global scope                                                                                         |
| `Call stack`          | The place where the computer stores the context of moving between methods and the place where the function was called. When a function returns, it removes the top context from the stack and uses that context to continue execution. |
| `Closure`             | Being able to reference a specific instance of a local binding in an enclosing scope. A function that references bindings from local scopes around it is called `a closure`                                                            |
| `Recursive`           | A function that calls itself
|`Pure Function` | A function with no side effects but also doesn't rely on side effects from other code (doesn't read global bindings). **When called with the same arguments, it produces the same value.**

```javascript
const square = function (x) {
  return x * x;
};
```

- This is a function definition

### Scope

- Each binding has a scope

### Delcaration Notation

```javascript
function square(x) {
  return x * x;
}
```

When a function is declared this way, you can call the function before it's declaration.

- Function declarations are not part of the regular top-to-bottom flow of control. They are conceptually moved to the top of their scope and can be used byu all the code in that scope.

### Closure

- A good mental model is to think of function values as containing both the code in their body and the environment in which they are created. <span style="text-decoration:underline">When called, a function body sees the environment in which it was created, not the environment in which it is called.</span>

### Recursion

- Recursion is typically three times slower than using loops.

```javascript
function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return (
        find(current + 5, `(${history} + 5)`) ||
        find(current * 3, `(${history} * 3)`)
      );
    }
  }
  return find(1, "1");
}
```

- console.log(findSolution(13))

```shell
find(1, "1")
  find(6, "(1 + 5)")
    find(11, "((1 + 5) + 5)")
      find(16, "(((1 + 5) + 5) + 5)")
        too big
      find(33, "(((1 + 5) + 5) * 3)")
        too big
    find(18, "((1 + 5) * 3)")
      too big
  find(3, "(1 * 3)")
    find(8, "((1 * 3) + 5)")
      find(13, "(((1 * 3) + 5) + 5)")
        found!
```

### Functions and side effects

* Functions can be divided into those that are called for their side effects and those that are called for their return value (although some do both)