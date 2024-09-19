
# Understanding JavaScript Functions

## 1. Function Declaration

A function declaration is the most common way to define a function in JavaScript. Here’s an example:

```javascript
function sum(a, b) {
  return a + b;
}
```

This `sum` function takes two parameters, `a` and `b`, and returns their sum.

## 2. Function Expression

Functions can also be defined as expressions. Here’s a function expression with a named function:

```javascript
let addEven = function sum(a, b) {
  return a + b;
};
```

In this case, `addEven` is a function expression assigned to a variable. The `sum` name here is optional and only accessible within the function itself.

## 3. Arrow Functions

Arrow functions provide a shorter syntax for writing functions. Here’s the equivalent of the previous example using an arrow function:

```javascript
let addEven = (a, b) => {
  return a + b;
};
```

Arrow functions are more concise and do not have their own `this` context. They are often used for shorter functions.

## 4. Function Inside a Function

In JavaScript, you can define functions inside other functions. Here’s an example:

```javascript
function outer() {
  console.log("Hello", inner(3, 5)); // Output: ['Hello', 15]

  function inner(a, b) {
    return a * b;
  }
}
```

In this example:
- `outer` is a function that logs a message and the result of calling `inner`.
- `inner` is a function defined within `outer` that multiplies two numbers.

## 5. Function Parameter Length

You can check the number of parameters a function expects using the `length` property:

```javascript
console.log(addEven.length); // Output: 2
```

This shows the number of parameters the `addEven` function takes, which is 2.

## 6. Immediately Invoked Function Expression (IIFE)

An IIFE is a function that executes immediately after its creation. Here’s an example:

```javascript
let b = (() => {
  console.log("Samarpan KC"); // Output: 'Samarpan KC'
})();
```

In this example, the arrow function is immediately executed and logs `"Samarpan KC"` to the console. IIFEs are useful for creating isolated scopes and executing code immediately.

