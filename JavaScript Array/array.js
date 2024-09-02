// Simple Array
let singerLists = ["Charlie", "Sushant", "Sajjan", "Swoopna"];
console.log(singerLists); //[ 'Charlie', 'Sushant', 'Sajjan', 'Swoopna' ]

// Another Way of array
let bandLists = new Array("1D", "The Elements", "Nepathye")
console.log(bandLists); // ['1D', 'The Elements', 'Nepathye']


// push()
singerLists.push("bekcha");
console.log(singerLists); // [ 'Charlie', 'Sushant', 'Sajjan', 'Swoopna', 'bekcha' ]

// pop()
singerLists.pop()
console.log(singerLists); // [ 'Charlie', 'Sushant', 'Sajjan', 'Swoopna' ]

// unshift()
singerLists.unshift("Narayn Gopal");
console.log(singerLists); // [ 'Narayn Gopal', 'Charlie', 'Sushant', 'Sajjan', 'Swoopna' ]

//shift()
singerLists.shift();
console.log(singerLists); // [ 'Charlie', 'Sushant', 'Sajjan', 'Swoopna' ]

//join()
let fullName = ["Samarpan", "KC"];
console.log(fullName.join(" ")); // 'Samarpan KC'

//concat()
let allSingers= singerLists.concat(fullName);
console.log(allSingers); // Array(6) [ 'Charlie', 'Sushant', 'Sajjan', 'Swoopna', 'Samarpan', 'KC' ]

//reverse()
allSingers.reverse();
console.log(allSingers); // Array(6) [ 'KC', 'Samarpan', 'Swoopna', 'Sajjan', 'Sushant', 'Charlie' ]

//slice()
let slicedSinger= allSingers.slice(2,4);
console.log(slicedSinger); // [ 'Swoopna', 'Sajjan' ]

//fill()
bandLists.fill("Samarpan & The Band" ,2,3);
console.log(bandLists); // [ '1D', 'The Elements', 'Samarpan & The Band' ]