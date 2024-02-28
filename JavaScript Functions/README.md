# JavaScript Functions
**Simply funtion === reuse code**

Creating funtion, 
```js
    function name1(){
        console.log("Hello!");
        console.log(2+44);
    } //it only create funtion, not run code

    // Calling the function by it's name
    //for run code
    name1();
    // Whenever i need the funtion i can call it by it's name
    name1();
    // now it runs the funtion 2 times
```


## return
A return statement in a function is used to specify the value that the function should return when it's called. When a function is executed and encounters a return statement, it stops executing and immediately returns the specified value back to the caller.
- ```javascript
    function add(a, b) {
    return a + b;
    }

    let result = add(3, 5);
    console.log(result); // Output: 8


## Function with Parameters

- ```javascript
    // Function with parameters
    function greet(name) {
    console.log("Hello, "+name+"!");
    }

    // Calling the function with an argument
    greet("Alice"); // Output: Hello, Alice!
The `greet` function accepts a `name` parameter and logs a greeting message to the console using that name.

## Function with Default Parameters
- ```javascript
    // Define a function that greets with a default name if not provided
    function greetDefault(name = "World") {
    console.log("Hello, "+ name);
    }

    // Call the greetDefault function without providing a name
    greetDefault(); // Output: Hello, World!

    // Call the greetDefault function with a specific name
    greetDefault("Alice"); // Output: Hello, Alice!
The `greetDefault` function accepts a `name` parameter, which defaults to "World" if not provided explicitly.

## Arrow Function
- ```javascript
    // Define an arrow function that greets a person by name
    const greetArrow = (name) => {
    console.log("Hello, " +name+"!");
    };

    // Call the arrow function with a specific name
    greetArrow("Alice"); // Output: Hello, Alice!
The `greetArrow` arrow function is a concise way of defining a function that accepts a `name` parameter and logs a greeting message to the console using that name.
