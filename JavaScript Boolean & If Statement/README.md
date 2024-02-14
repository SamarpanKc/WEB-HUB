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

