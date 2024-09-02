
# JavaScript Arrays - A Beginner's Guide

## Introduction to Arrays
Arrays are special variables in JavaScript that can hold multiple values at a time. They are a type of object used to store lists of data.

### Example:
```javascript
let studentList = ["Tom", "Ram"];
// Array starts from index 0
console.log(studentList[1]); // Output: Ram
```

## Array Properties in JavaScript
- Arrays are also objects in JavaScript. This means they have properties and methods.
- Another way to create an array is using the `Array` constructor.

### Example:
```javascript
let studentList = new Array("Tom", "Ram");
// This array has more functionalities because it's an object
```

## Dynamic Typing in JavaScript
JavaScript is a dynamically typed programming language. This means that an array can hold elements of different types.

### Example:
```javascript
let studentList = ["Tom", 10, true, undefined];
console.log(studentList); // Output: ["Tom", 10, true, undefined]
```

## Common Array Methods
JavaScript provides several built-in methods to manipulate arrays.

1. **push()**: Adds a new element at the end of an array.
    ```javascript
    studentList.push("John");
    console.log(studentList); // Output: ["Tom", "Ram", "John"]
    ```

2. **pop()**: Removes the last element from an array.
    ```javascript
    studentList.pop();
    console.log(studentList); // Output: ["Tom", "Ram"]
    ```

3. **unshift()**: Adds a new element at the beginning of an array.
    ```javascript
    studentList.unshift("John");
    console.log(studentList); // Output: ["John", "Tom", "Ram"]
    ```

4. **shift()**: Removes the first element of an array.
    ```javascript
    studentList.shift();
    console.log(studentList); // Output: ["Tom", "Ram"]
    ```

5. **join()**: Joins all elements of an array into a string.
    ```javascript
    let fullName = ["Samarpan", "KC"];
    console.log(fullName.join(" ")); // Output: "Samarpan KC"
    ```

6. **concat()**: Merges two or more arrays.
    ```javascript
    let studentList2 = ["John", "Jane"];
    let allStudents = studentList.concat(studentList2);
    console.log(allStudents); // Output: ["Tom", "Ram", "John", "Jane"]
    ```

7. **reverse()**: Reverses the order of the elements in an array.
    ```javascript
    studentList.reverse();
    console.log(studentList); // Output: ["Ram", "Tom"]
    ```

8. **slice()**: Returns a portion of an array.
    ```javascript
    let slicedArray = studentList.slice(1, 3);
    console.log(slicedArray); // Output: ["Ram"]
    ```

9. **fill()**: Fills the array with a static value.
    ```javascript
    studentList.fill("KC", 1, 2);
    console.log(studentList); // Output: ["Tom", "KC"]
    ```

With these array methods, you can perform a variety of operations to manipulate and interact with arrays effectively in JavaScript.
