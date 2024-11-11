
## Firstly
```javascript
import { useState, useEffect } from 'react'
// Need to import from react like we did #include <iostream>
// inmporting from react library
```

## Example usage
```javascript
useEffect(() => {
    alert("Welcome to the App!")
  })
  // if no array it will run in every reload / render
```
```javascript
useEffect(() => {
    alert("Welcome to the App!")
  }, [])
  // if array is empty, run without any changes
  // it will run in first render
```
But 
```javascript
useEffect(() => {
    alert("Welcome to the App!")
  }, [count])
  // run while the count changed
```

- here `useEffect` run two times because of the `</StrictMode>` in main.jsx file, `StrictMode` run the code 2 time in development mode; once for check and then run the code

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
