// Funcion as a pure Object ?

// by properties of function 
let add = (a,b)=> a+b;

add.other = "Hello";
console.log(add.other); // 'Hello'

// as a object construction function and initialization as wrapper object

function Student(name){
    this.name= name;    
}
//like
let s = new Student("Samarpan KC");
console.log(s); // Student { name: 'Samarpan KC' }
console.log(typeof(s)); // 'object' if we write new type of becomes object

let s1 = new Student("Harry");
console.log(s1); // Student { name: 'Harry' }