# Hook and State in React
## What is State in React?
- The state object is where you store property values that belong to the component.
- When the state object changes, the component re-renders.

## What is Hooks in React?
- Hooks allow us to "hook" into React features such as state and lifecycle methods.

## Example
```js
      // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
```
- In the code you provided, `setCount` is a function that allows you to update the value of the `count` state variable.
- When you call `setCount` with a new value, it updates the `count` state and causes the component to re-render with the updated value.
- `useState(0)` initializes a state variable. <span style="color: lightgreen;">The 0 is the initial value for count.</span>

- `count` holds the current value of the state.

- `setCount` is the function used to update `count`. You can pass a new value directly to `setCount(newValue)` or update it based on the current value, like `setCount(prevCount => prevCount + 1).`
Every time `setCount` is called, React re-renders the component to reflect the updated state.

## The State:
- `count` is the state variable that holds the current state value.

- `setCount` is the state updater function. It lets you update the value of `count` and triggers a re-render when the state changes.

## The Hook:
- `useState` is the hook here. 

- Hooks are special functions in React that let you "hook into" React features. In this case, `useState` is a hook that lets you add state to functional components.


## React Fearure
- If we click on the change of the page react handle it without doing any reload on the browser side



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
