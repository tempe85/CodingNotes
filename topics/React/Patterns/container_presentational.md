# Container/Presentational components/

- Encourages separation of concerns.

  - Presentational components are pure functions responsible for UI
  - Container components are responsible for state and data of the app.
  - Presentational comonents are easily resuable
  - Testing presentational componetns is easy since they are pure functions. We know what will render based on what we pass, without having to mock a data store.

- **Container components** are about `what` data is shown to the user
- **Presentational component** care about `how` that data is shown to the user

## Presentational Component

- Receives it data through `props`
- Primary function is to display data it receives _without_ modifying that data.
- Usually odn't contain their own state unless they need state for UI purposes

## Container Component

- Primary purpose is to `pass data` to presentational components which they _contain_
- Usually don't render any components besides presentational components that care about their data.
- Usually don't contain any styling.

## Hooks

- In many cases, the Container/Presentational pattern can be replaced with React Hooks.

```jsx
export default function useDogImages() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breed/labrador/images/random/6")
      .then((res) => res.json())
      .then(({ message }) => setDogs(message));
  }, []);

  return dogs;
}
```

- Instead of having data fetching logic in the container, we create custom hook that fetches and returns the data.
