
# Destructuring and Spread Operators in JavaScript

JavaScript’s **destructuring** and **spread operators** provide an easy way to handle objects and arrays, making code more concise and readable.

- Destructuring allows you to unpack values from arrays or properties from objects into distinct variables. This makes your code cleaner and easier to read
- The spread operator lets you "spread out" the elements of an array or object. This is useful for creating new arrays or objects, copying existing ones, or combining them.

## Example of Nested Object Destructuring:

Instead of accessing an object property using multiple steps, like this:

```js
let details = {
    name: "Samarpan KC",
    age: 19,
    address: {
        location: "Pokhara",
        lon: 1,
        lat: 2,
    },
};

console.log(details.address.location); // Pokhara
```

You can destructure nested properties directly:

```js
const { address: { location } } = details;
console.log(location); // Pokhara
```

This approach simplifies code, especially when dealing with deeply nested objects.

## Copying an Object:

Traditionally, to copy an object, you can use `Object.assign()`:

```js
let a = {};
console.log(Object.assign(a, details)); 
// { name: 'Samarpan KC', age: 19, address: { location: 'Pokhara', lon: 1, lat: 2 } }
```

But with the **spread operator** (`...`), copying becomes even simpler:

```js
let a = { ...details };
console.log(a); 
// { name: 'Samarpan KC', age: 19, address: { location: 'Pokhara', lon: 1, lat: 2 } }
```

The spread operator copies the content of `details` into the new object `a`.

## Combining Two Objects:

You can also use the spread operator to merge objects easily:

```js
let hobbies = {
    first: "Sing",
    second: "Cricket",
};

let combined = { ...details, ...hobbies };
console.log(combined); 
// { name: 'Samarpan KC', age: 19, address: { location: 'Pokhara', lon: 1, lat: 2 }, first: 'Sing', second: 'Cricket' }
```

This merges `details` and `hobbies` into a new object `combined`, combining all properties from both objects.

## Destructuring Arrays:

Arrays can also be destructured. Here's an example:

```js
let planets = ["Sun", "Earth", "Venus"];
let [planet1, planet2] = planets;
console.log(planet1); // Sun
console.log(planet2); // Earth  
```

Using the spread operator for arrays:

```js
let farPlanets = ["Neptune", "Uranus", "Saturn"];
let allPlanets = [...planets, ...farPlanets];
console.log(allPlanets);
// ["Sun", "Earth", "Venus", "Neptune", "Uranus", "Saturn"]
```

This combines `planets` and `farPlanets` into a single array.

## Object Destructuring with Default Values:

In case a key is missing in the object, you can assign default values like this:

```js
const { name, age, hobby = "Music" } = details;
console.log(hobby); // Music (default value)
```
