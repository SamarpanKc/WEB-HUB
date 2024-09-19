// function sum(a,b){
//     return a+b;
// }
// another way
// let addEven = function sum(a,b){

// }

let addEven = (a, b) => {
  return a + b;
};

function outer() {
  console.log("Hello", inner(3, 5)); //['Hello'], 15

  function inner(a, b) {
    return a * b;
  }
}

// console.log(addEven.length) // n. of parameters 2

// IIFE
let b = (()=> {
  console.log("Samarpan KC"); //'Samarpan KC'
})();
