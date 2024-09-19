
# Recursive Function in JavaScript

A **recursive function** is a function that calls itself during its execution. This technique is useful for solving problems that can be divided into simpler sub-problems of the same type.

## How Recursive Function Works

In JavaScript, recursion happens when a function calls itself within its body. For recursion to work properly, there must be a **base case** that stops the function from calling itself infinitely, and a **recursive case** that allows the function to proceed toward the base case.

### Syntax Example

```javascript
function recursiveFunction(parameter) {
  // Base case: the condition to stop recursion
  if (parameter === baseCondition) {
    return result;
  }

  // Recursive case: function calling itself
  return recursiveFunction(modifiedParameter);
}
```

## Example: Factorial of a Number

The factorial of a number `n` is the product of all positive integers less than or equal to `n`. We can calculate the factorial of `n` recursively:

```javascript
function factorial(n) {
  // Base case: when n is 0, the factorial of 0 is 1
  if (n === 0) {
    return 1;
  }
  
  // Recursive case: n * factorial of (n-1)
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120
```

In this example, the function `factorial` calls itself with a decremented value of `n` until `n` equals 0, which is the base case.

## Key Points to Remember

1. **Base Case**: A recursive function must have a base case that stops further recursive calls, otherwise, it will run into an infinite loop or stack overflow.
2. **Recursive Case**: The function should call itself with updated arguments to make progress towards the base case.
3. **Problem-Solving**: Recursion is ideal for problems like tree traversal, factorial calculation, and solving puzzles (e.g., the Tower of Hanoi).

## Pros and Cons of Recursive Functions

### Pros:
- Simplifies complex problems by breaking them down into smaller, manageable problems.
- Clean and concise code for problems that naturally fit a recursive approach.

### Cons:
- Can lead to a **stack overflow** if not implemented with proper base cases.
- Recursive functions may be less efficient than iterative solutions due to overhead from multiple function calls.

## Conclusion

Recursive functions are a powerful concept in JavaScript, particularly suited for problems that can be broken into smaller, similar sub-problems. However, care must be taken to ensure there is a base case to avoid infinite recursion.
