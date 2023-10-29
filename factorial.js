// find the factorial numbers

function factorial(n){
    let restult = 1;
    for ( let i = n; i >= 1; i--){
        restult = restult * i;
    }
    return restult;
}

let factorialOfN = factorial(7);
console.log(factorialOfN);