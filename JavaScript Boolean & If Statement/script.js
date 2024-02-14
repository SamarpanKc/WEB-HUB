// Boolean
true
false
// 
console.log(7 == '7.00'); //true 
console.log(7 === '7.00'); //false

console.log(7 === 7); //true

console.log(7 !== 7); //false

console.log(8 > 4 - 4); //true

// IF and Boolean combining

if (true) {
    console.log("Hello!");
}
if (false) {
    console.log("Hello!");
}
// Output: Hello!

// Else
if (false) {
    console.log("Hello!");
}else{
    console.log("Bye!");
}
// Output: Bye!

const Age=15;
if (Age >= 16) {
    console.log("You can take your citizenship.");
}else{
    console.log("You can not take your citizenship.");
}
// Output: You can not take your citizenship.

// else if
if (Age >= 16) {
    console.log("You can take your citizenship.");
} else if(Age > 14){
    console.log("Almost there!");
} else{
    console.log("You can not take your citizenship.");
}
// Output: You can not take your citizenship.

