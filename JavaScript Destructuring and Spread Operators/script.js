
// Arrays can also be destructured
let planets = ["Sun", "Earth", "Venus"]
let [planet1, planet2]= planets;
console.log(planet1) // 'Sun'
console.log(planet2) //'Earth'

// Using the spread operator for arrays
let farPlanets = ["Neptune", "Uranus", "Satrun"];
let allPlanets = [...planets,...farPlanets];
console.log(allPlanets); // Array(6) [ 'Sun', 'Earth', 'Venus', 'Neptune', 'Uranus', 'Satrun' ]


let details = {
    name: "Samarpan KC",
    age: 19,
    address: {
        location: "Pokhara",
        lon: 1,
        lat: 2,
    },
};
console.log(details.address.location) // 'Pokhara'

// Instead of doing this;
const {address:{location}}= details;
console.log(location)// 'Pokhara'

// copy objects by spread operator
let a ={}
a ={...details};
console.log(details);

let hobbies = {
    first: "Sing",
    second: "Cricket",
};

let combined = { ...details, ...hobbies };
console.log(combined); 
// { name: 'Samarpan KC', age: 19, address: { location: 'Pokhara', lon: 1, lat: 2 }, first: 'Sing', second: 'Cricket' }
