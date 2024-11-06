let a = prompt("Enter First Number")
let b = prompt("Enter Second Number")

//let sum = a+b          // this take as a string

if (isNaN(a) || isNaN(b)) {
    throw ReferenceError("This is not a number")
}

let sum = parseInt(a)+parseInt(b) //this change into integer

function main() {
    let x = 2
    try {
        console.log('The sum of the two numbers: ', sum*x)
    } catch (error) {
        console.log("Tait Error Aayo")
    }
    //try catch is for error handling
    finally{
        console.log("Done")
    }
}

main()