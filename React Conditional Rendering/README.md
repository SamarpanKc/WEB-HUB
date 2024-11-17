
## {javascript code}
- accessing/running the javascript code using `{js code...}`

## Rensdering
- if you want to show only if condition use this:
```javascript
    /*{ShowBtn?<button>Opps, I caught</button>:""} 
     if there is not else condition, then
    instead of using ternary operator use: */
    
    {ShowBtn && <button>Opps, I caught</button>}
    /* if true show button  */

    <div>
    <button onClick={()=>{setShowBtn(!ShowBtn)}}>
      What?</button>
     </div>
```
- if there is if-else condition use `ternary operator`
```javascript
    {ShowBtn?<button>Opps, I caught</button>:"Bye Bye"} 
    
    // {ShowBtn && <button>Opps, I caught</button>}
    /* if true show button  */

    <div>
    <button onClick={()=>{setShowBtn(!ShowBtn)}}>
      What?</button>
     </div>
```

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
