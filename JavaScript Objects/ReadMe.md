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