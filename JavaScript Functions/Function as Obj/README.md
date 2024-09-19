# Functions as Objects in JavaScript

In JavaScript, functions are considered **first-class objects**, meaning they can have properties and methods just like any other object. Let's explore this concept with examples.

## 1. Functions as Pure Objects

Since functions are objects, we can assign properties to them. Here's an example:

```javascript
let add = (a, b) => a + b;

add.other = "Hello";
console.log(add.other); // Output: 'Hello'
```

In this example:
- The `add` function is created using an arrow function.
- We add a property called `other` to the function and assign the string `"Hello"` to it.
- Functions can store properties like objects, showcasing their object-like behavior.

## 2. Functions as Object Constructors
In JavaScript, functions can also act as constructors for objects. By using the `new` keyword, we can create instances of objects from functions. Here’s an example:
```javascript
function Student(name) {
    this.name = name;
}
```
### Explanation:
`Student` is a constructor function. The `this` keyword inside the function refers to the object being created when the function is called using `new`.
When `new Student("Samarpan KC")` is called, a new object is created with the `name` property set to `"Samarpan KC"`.

### Example:
```javascript
let s = new Student("Samarpan KC");
console.log(s);  // Output: Student { name: 'Samarpan KC' }
console.log(typeof(s));  // Output: 'object'
```
- In this example, the `Student` constructor function is used to create an object `s` with the `name` property.
- The `typeof` operator shows that `s` is an object, which demonstrates that calling a constructor with `new` creates an object.

### Another Instance:
```javascript
let s1 = new Student("Harry");
console.log(s1);  // Output: Student { name: 'Harry' }
```
- Here, we create another instance of the `Student` object with the `name` set to `"Harry"`. Each instance is unique and has its own properties.

## Key Points to Remember
- Functions as Objects: Functions in JavaScript are treated as objects, meaning they can have properties and methods like any other object.

- Object Constructors: Functions can also be used to create objects using the `new` keyword, making them constructor functions.

- Dynamic Behavior: By using functions as objects and constructors, JavaScript offers a dynamic and flexible way to create and manipulate data structures.