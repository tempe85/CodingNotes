* Allow you to reuse stateful logic without chaning your component hierarchy
* Lets you split one component into smaller functions based on what pieces are related (such as setting up a subscription or fetchin data)
* Hooks lets you use more of React's features without classes. 
* Functions that let you 'look into' react state and lifecycle features from function components. 

```js
import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

### Effect 
* `useEffect` adds the ability to perform side effects from a function component (same purpose as componentDidMount and componentDidUpdate and componentWillUnmount, unified into a single API)
* React guarentees that the DOM has updated by the time it runs the effects

#### Effects without Cleanup
* Sometimes we want to run additional code after the DOM has updated
* Logging, network requests are examples that don't require cleanup. 
* Effects are typically performed after the DOM is updated
    * Side effects should not be in the `render()` since it would occur too early. In classes, side effects should be in `componentDidMount` and `componentDidUpdate` which updates the component after `render()` makes changes

#### Effects with cleanup
* Might need to cleanup something to prevent a memory leak. 
* With clases, you setup the subscription in `componentDidMount` and clean up with `componentWillUnMount`


### useCallback
* Prevents a function from being created on every single render.
