
```javascript
let d = 0;
  useEffect(() => {
    d = d + 1;
    console.log(`Component re-rendered ${d} times`);
  })
  // It only print 1 every time becuase it re-rendered every time and value of 'd' become 0
```
- For  solving this Problem here it comes `useRef()` hook

```javascript
const d = useRef(0)
  useEffect(() => {
    d.current = d.current + 1;
    console.log(`Component re-rendered ${d.current} times`);
  })
  // using useRef(vlaue) stores the current value, by the help of d.current 
```


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
