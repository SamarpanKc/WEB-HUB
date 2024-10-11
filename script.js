
console.log(console);

console.error("16");

console.warn("Not Sunday!");

// table
let songLists = [{
    Song: "YekaiAarthi",
    Singer: "Samarpan KC",
},
{
    Song: "Dhairya",
    Singer: "Sajjan",
},]
console.table(songLists);

// group
console.group("For Loops");
for (let i = 0; i < 10; i++) {
    console.log(i)    
}
console.groupEnd();

// time
console.time("Timer");
let k =5;
for (let i = 1; i <= 10; i++) {
    let result = k*i;
    console.log(result);    
}
console.timeEnd("Timer");