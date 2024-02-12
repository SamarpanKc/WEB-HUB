# Understanding Variables in JavaScript

In JavaScript, variables are fundamental building blocks that store data for later use. Let's explore how variables work and how they're used in JavaScript.

## Declaration and Initialization

### Declaration
- Variables are declared using the `let`, `const`, or `var` keywords.
- Example: `let age;`

### Initialization
- Variables can be initialized (assigned a value) at the same time they're declared.
- Example: `let name = "John";`

## Variable Types

### Primitive Types
- JavaScript has six primitive types: `number`, `string`, `boolean`, `null`, `undefined`, and `symbol`.
- Example: `let age = 25;`

### Object Types
- Objects in JavaScript are collections of key-value pairs and can hold complex data structures.
- Example: `let person = { name: "John", age: 25 };`

## Variable Scope

### Global Scope
- Variables declared outside of any function have global scope and can be accessed from anywhere in the code.
- Example: `let globalVar = 10;`

### Local Scope
- Variables declared inside a function have local scope and can only be accessed within that function.
- Example: 
  ```javascript
  function myFunction() {
    let localVar = 20;
    console.log(localVar); // Output: 20
  }

# Cart Quantity Buttons

These buttons allow users to interact with the cart quantity by adding items, resetting the quantity, and displaying the current quantity.

## HTML Buttons

### Show Quantity Button
- When clicked, this button logs the current cart quantity to the console.

### Add to Cart Button
- When clicked, this button increments the cart quantity by 1 and logs the updated quantity to the console.

### +2 Button
- When clicked, this button increments the cart quantity by 2 and logs the updated quantity to the console.

### +3 Button
- When clicked, this button increments the cart quantity by 3 and logs the updated quantity to the console.

### Reset Button
- When clicked, this button resets the cart quantity to 0 and logs a message confirming the reset to the console.

## JavaScript

```javascript
// Initialize cart quantity variable
let CartQuantity = 0;

// Functions for button clicks are directly implemented in the HTML onclick attribute.
