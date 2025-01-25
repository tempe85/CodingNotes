https://www.patterns.dev/posts/provider-pattern

# Provider Pattern/Context API

- Makes it possible to pass data to many components without having to pass it through each component layer.
- Increases risk of accidentally introducing bugs.
- _Prop drilling_ or passing props far down the component tree.
- To make sure that components aren't consuming providers that contain unnecessary values which may update, you can create several providers for each separate usecase.

```jsx
const DataContext = React.createContext()

function App() {
  const data = { ... }

  return (
    <div>
      <DataContext.Provider value={data}>
        <SideBar />
        <Content />
      </DataContext.Provider>
    </div>
  )
}
```

Using hooks to provide context to components:

```jsx
function useThemeContext() {
  const theme = useContext(ThemeContext);
  if (!theme) {
    throw new Error("useThemeContext must be used within ThemeProvider");
  }
  return theme;
}
```

Use an HOC to separate context logic from rendering components

```jsx
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  const providerValue = {
    theme: themes[theme],
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={providerValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export default function App() {
  return (
    <div className={`App theme-${theme}`}>
      <ThemeProvider>
        <Toggle />
        <List />
      </ThemeProvider>
    </div>
  );
}
```
