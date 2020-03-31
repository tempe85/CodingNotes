<small>[Return Home](./../../README.md)</small>

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

## HOC (Higher Order Components)
* A pattern where a function takes a component as an argument and returns a new component
```javascript
const enhancedComponent = higherOrderComponent(originalComponent)

const IronMan = withSuit(TonyStark)
```
### HOC
<img src="../.././images/hocComponent.png" width="500px">
<br/>

### Component using HOC
<img src="../.././images/componentWithHoc.png" width="500px">

* One common mistake is that when you pass props into a component using an HOC, the props are passed into the HOC and not the component itself. To fix this make sure to spread your props from the HOC into the original component like this:

```javascript
<OriginalComponent
  count={this.state.count}
  incrementCount={this.incrementCount}
  {...this.props}
/>
```
Forwarding the props like this will forward the props to the original component

* You can also add arguments into an HOC to give it arguments to differentiate between components using the same HOC
```javascript
UpdatedComponent(ClickCounter, 10)
```
The HOC can now consume the second parameter which can consumed by the HOC in a unique way for that component
