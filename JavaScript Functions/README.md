# JavaScript Functions
**Simply funtion === reuse code**

Creating funtion, 
```js
    function name1(){
        console.log("Hello!");
        console.log(2+44);
    } //it only create funtion, not run

    // Calling the function by it's name
    //for run code
    name1();
    // Whenever i need i funtion i can call it by it's name
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

## Exercises
1. Create a function called 'greet' that displays the message 'Hello!' in the console. Call / run this function a few times using: greet();
2. Continuing from 7a, add a parameter called 'name' to the 'greet' function and display the message: 'Hello ${name}!' Call the function a few times with different names: greet('Simon');
3. Try calling greet() without a name (it will display 'Hello undefined!'). Modify the function so that if 'name' is undefined, it will display 'Hi there!' instead.
(Hint: use an if-statement. Since undefined is a falsy value, you can use: if (!name) { ... } to check if 'name' is undefined).
4. Create a function 'convert To Fahrenheit (celsius)' that takes a number in degrees Celsius and returns a number in degrees Fahrenheit.
    - Formula: Fahrenheit = (Celsius * 9/5) + 32
    - convertToFahrenheit(25) => 77
5. Create a function 'convertToCelsius (fahrenheit)' that takes a number in degrees Fahrenheit and returns a number in degrees Celsius.
    - Formula: Celsius = (Fahrenheit - 32) * 5/9
    - convertToCelsius(86) => 30
6. Create a function 'convertTemperature(degrees, unit)' that takes a number and a unit ('C' or 'F'), and converts it into the other unit.
    - convertTemperature(25, 'C') => '77F'
    - convertTemperature(86, 'F') => '30C'
Note: return a string, and try to reuse the functions from 4 and 5.
7. Create a copy of the Calculator project from exercise 5r (if you didn't do 5r, copy the code for 5r from the solutions).
    - Notice there's a lot of duplicated code in the buttons.
    - Create a function 'updateCalculation' and reuse the code.
8. Create a copy of the Cart Quantity project from exercise 61.
    - Create a function 'updateCartQuantity' and reuse the code.
9. Modify 'updateCartQuantity' from 7h so that if the quantity is invalid, alert(); and then return; (this is called an early return). An early return make our code cleaner because we can remove the 'else-if' / 'else'.
```javascript
    if (condition) { 
        alert('The cart is full'); 
    } else {

    }
```
- to
```javascript
    if (condition) { 
        alert('The cart is full'); 
        return; 
    }
```