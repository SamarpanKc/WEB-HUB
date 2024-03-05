function name1(){
    console.log("Hello!");
    console.log(3+22);
}

name1();

name1();


function calcTax(Amount){ //parameter name
    console.log(Amount*0.1);
}
calcTax(3000);// implement value in parameter

function codee(name) {
    console.log("this is " + name + " functions");
    console.log("this is " + name + " string");
    console.log("this is " + name + " loops");
    console.log("this is " + name + " statements");
}
codee("JavaScript");




function sum(a, b){
    // console.log(a+b);
    return a+b;
}
result1 = sum(11, 12)
result2 = sum(1, 10)
result3 = sum(50, 2)

console.log("The sum is: ", result1);
console.log("The sum is: ", result2);
console.log("The sum is: ", result3);



// Arrow function
// const func1=()=>{}

const func1 = (s)=>{
    console.log("I'm an arrow function", s);
}

func1(33);
func1(48);
func1(87);



