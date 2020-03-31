<small>[Return Home](./../../Notes.md)</small>

# React

## React Hooks

- Can only be used inside of Functional Components or other hooks
- Conventional naming is useXYZ()

```javascript
    onChange={event => {
      const newTitle = event.target.value;
      setInputState(
        prevState =>
          ({
            ...prevState,
             title: newTitle
          }));
```

- Because of an issue with closure, where we have two nested annonymous functions, we have to set our event to a constant here, otherwise it will not appropriately grab the correct event

### Use Effect

```javascript
    useEffect(() => {
      ...do stuff
    }, [])
```

- If the second argument in useEffect is [] it will basically work like componentDidMount() and only render once after the initial render() is called. The second argument controls when/how often this will run.

```javascript
useEffect(() => {
  console.log("RENDER INGREDIENTS", [userIngredients]);
});
```

- Second argument is a dependency on when the first argument method will run. In this case, when a prop called 'userIngredients' changes, then this will run again.

### useCallback
* Hook that saves a function so that a copy of the function is not needlessly generated, need to specify the dependencies of useCallback to determine when it needs to be re-rendered
  
  ```javascript
    const removeIngredientHandler = useCallback(ingredientId => {
    dispatchHttp({ type: "SEND" });
    fetch(
      `https://react-hooks-backend-6c85a.firebaseio.com/ingredients/${ingredientId}.json`,
      {
        method: "DELETE"
      }
    )
      .then(response => {
        dispatchHttp({ type: "RESPONSE" });
        dispatchIngredients({ type: "DELETE", id: ingredientId });
      })
      .catch(error => {
        dispatchHttp({
          type: "ERROR",
          errorMessage: `Failed to remove ingredient. ${error.message}`
        });
      });
  }, []);
  ```
  * In this example no dependencies are needed
### React Memo
* `React.memo`
  * Helps prevent rerenders when not needed (re-render to virtual DOM). Wraps functional components.
  * Using with wrapper an entire component
* `useMemo` 
   * Saves a value to help prevent re-renders
   * Typically not going to be used for entire functional components
```javascript
  const ingredientList = useMemo(() => {
    return (
      <IngredientList
        ingredients={userIngredients}
        onRemoveItem={removeIngredientHandler}
      />
    );
  }, [userIngredients, removeIngredientHandler]);
```
* Still need to list dependencies for re-render like the previous hooks