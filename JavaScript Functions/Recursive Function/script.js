
/* Recursive Function
    need a stopping condition
    self + task(problem) solve
*/

function fact(n){
    if(n==0){
        return 1;
    }else{
        return n * fact(n-1);
    }
}

let result = fact(7);
console.log(result);