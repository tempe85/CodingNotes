https://www.patterns.dev/posts/hoc-pattern

# HOC Pattern

- One way to reuse the same ogic in multiple components is using the **higher order component** pattern.
- A component that receives another component that returns an element with additional logic

```jsx
function withStyles(Component) {
  return props => {
    const style = { padding: '0.2rem', margin: '1rem' }
    return <Component style={style} {...props} />
  }
}

const Button = () = <button>Click me!</button>
const Text = () => <p>Hello World!</p>

const StyledButton = withStyles(Button)
const StyledText = withStyles(Text)
```
