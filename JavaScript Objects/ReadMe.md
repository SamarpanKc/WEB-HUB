# JavaScript Objects

## Definition

In JavaScript, an object is a data structure consisting of key-value pairs. Objects allow you to store and organize data in a more complex and structured manner compared to simple data types like strings or numbers.

## Syntax

Objects are defined using curly braces `{}`. Each key-value pair is separated by a colon `:` and different pairs are separated by commas `,`.

```javascript
// Object Syntax
let person = {
    name: "John",
    age: 30,
    isStudent: false,
    address: {
        street: "123 Main St",
        city: "Cityville",
        zip: "12345"
    }
};
```
## Properties and Values

- Properties: Keys within an object are called properties. They represent characteristics or attributes of the object.
- Values: Values associated with properties can be of any data type, including strings, numbers, booleans, arrays, functions, or even nested objects.

```javascript
let person = {
    name: "John",
    age: 30,
    isStudent: false,
    address: {
        street: "123 Main St",
        city: "Cityville",
        zip: "12345"
    }
};

console.log(person.name); // Output: John
console.log(person.age); // Output: 30
console.log(person.isStudent); // Output: false
console.log(person.address.city); // Output: Cityville

```
In the example above:

`name, age, isStudent, and address` are properties of the person object.
"John", 30, `false`, and the nested object `{ street: "123 Main St", city: "Cityville", zip: "12345" }` are the corresponding values.

JavaScript objects are versatile and powerful data structures that allow for the organization and manipulation of complex data in an intuitive way.

```javascript
let book = {
    name: "Atomic Habit",
    Author: "James",
    description() {
        return "Improve yourself";
    }
};

console.log(book.description());
```

## Wrapper Object

Using `new Object()` to create an object:

```javascript
let b = new Object();
```

This is the same as the above `book` object.

## Modifying an Object

```javascript
book.name = "Yourself";
console.log(book.name);
```
## Adding Keys and Values Outside the Object

```javascript
book.address = "Pokhara";
```

## Deleting Keys and Values

```javascript
delete book.Author;
```

## Accessing Object Values in Functions

```javascript
description() {
    return this.name;
}
```

## Object in Array Form

```javascript
console.log(Object.entries(book));
```

## Copying Object Values to Another Object

```javascript
let a = {};
Object.assign(a, book);
```

## Object.freeze()

Prevents modifications to the object (shallow freeze).

```javascript
Object.freeze(book);
```
