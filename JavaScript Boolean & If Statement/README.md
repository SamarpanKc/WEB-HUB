# Understanding JavaScript Boolean Expressions and Control Flow

## Equality Operators

- ```javascript
    console.log(7 == '7.00'); // Output: true
    console.log(7 === '7.00'); // Output: false
    console.log(7 === 7); // Output: true
    console.log(7 !== 7); // Output: false
    console.log(8 > 4 - 4); // Output: true

- The `==` and `===` operators are used for equality comparison.
- `==` performs type coercion, so 7 == '7.00' returns true.
- `===` strictly compares both value and type, so 7 === '7.00' returns false.
- Other examples demonstrate standard comparison operators returning either true or false.

## IF Statements
- ```javascript
    if (true) {
        console.log("Hello!");
    }
    if (false) {
        console.log("Hello!");
    }
    // Output: Hello!

- The `if` statement executes the code block if the condition inside the parentheses evaluates to `true`.

## IF-ELSE Statements
- ```javascript
    if (false) {
        console.log("Hello!");
    } else {
        console.log("Bye!");
    }
    // Output: Bye!

The `if-else` statement executes the code block within the `if` block if the condition is `true`, otherwise, it executes the code block within the `else` block.

## IF-ELSE IF-ELSE Statements
- ```javascript
    const Age=15;
    if (Age >= 16) {
        console.log("You can take your citizenship.");
    } else if(Age > 14){
        console.log("Almost there!");
    } else {
        console.log("You can not take your citizenship.");
    }
    // Output: You can not take your citizenship.

The `if-else if-else` statement allows testing multiple conditions.
It evaluates each condition sequentially until one evaluates to `true`, then executes the corresponding code block.

# Exercises
**Note:** Do these in .html file
1. Create a variable called 'hour' and save the current hour of the day (use 24-hour format and save it as a number hetven 0-2
    - If hour is bet" 6 6 and 12, display 'Good Morning'
    - Similarly, 13-17, Good Aftermoon otherwise Good Evening.
2. Try changing the vlaue in the `hour` variable tomake it display diffrent messages.
3. Create a variable called 'name' and save your name inside (as a string). Update the if-statement to display your name in each message. For eg. `'Good Morning & {name}!'`
4. Imagine a Shom Park that has a discount of for children (6 years and younger) or seniors (65 years and older)
    - Create a variable and save a person's age inside.
    - Create and if statement that checks if the person qualifies for a display no discount in the console (try to use || operator) 
    - Try changing the age variable into display different messages.
5. Let's say the discount is only available if it is not a holiday. Create a variable `const isHoliday = true;`
    - Update the code so that in order to get a discount, people must meet the age requirement and it is also not holiday.
    - **Note:** && has higher priority than || so use()
    - Try changing the value of isholiday to display different messages.
6. We'll create a coin-flip game (create 1 HTML file):
    - Generate a random number with Math.random(). Save it in a variable.
    - Create an if-statement and check: If the number is less than 0.5, then display 'heads' in the console. Else display 'tails' in the console.
    - Instead of displaying 'heads' or 'tails' in the console, save the result in a variable called 'result'.
    - Let's say we're trying to guess the result. Create a variable called 'guess' and save your guess ('heads' or 'tails').
    - If your guess matches the result, display 'You win!' in the console If your guess does not match the result, display 'You lose!'
    - (Challenge) Instead of using if-statements in the previous exercises, try switching them into ternary operators (condition ? A: B).
7. Challenge Exercises
Setup: we'll improve the Cart Quantity project. First, make a copy of the project from exercise 5k (if you didn't do 5k, check the solutions).
    - Let's say the cart has a maximum quantity of 10. Before updating the quantity, check if the quantity will be greater than 10: If it will, display a popup saying 'The cart is full' and don't update the quantity.
Otherwise, update the quantity and console.log() it as usual.
    - In exercises 5i - 5k, we created the 'Remove from cart', '-2', and '-3' buttons. Before updating the quantity, check if it will go below 0:
If it will, create a popup saying 'Not enough items in the cart' and don't update the quantity.
Otherwise, update the quantity and console.log() it as usual.
