//Object
let music= {
    name: "Adrishya Bhawana",
    singer: "Samarpan KC",
    description(){
        return this.name; //this use to access this funtion object
    },
}
console.log(music.name);
console.log(music.singer);
console.log(music.description());

//Wrapper Object
let b = new Object({
    name: "Adrishya Bhawana",
    singer: "Samarpan KC",
    description(){
        writter: "Samarpan KC"
    },
})

//Modify Objects
music.name= "Adhuro Kathaa";
console.log(music.name);

//Adding objest's key and values outside the Object
music.language= "Nepali";
console.log(music.language);

// Delete the key and value from the object
delete music.description;
console.log(music);

// Diplay all the objects in Array
console.log(Object.entries(music));

// Copy the object to new one
let a ={}
Object.assign(a, music)
console.log(a)
