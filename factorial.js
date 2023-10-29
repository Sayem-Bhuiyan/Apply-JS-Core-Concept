// find the factorial numbers

function factorial(n){
    let restult = 1;
    for ( let i = n; i >= 1; i--){
        restult = restult * i;
    }
    return restult;
}

let factorialOfN = factorial(7);
// console.log(factorialOfN);

// find factorial number using while loop

function findFactorial(number){
    let restult = 1;
    let i = number;
    while( i >= 1){
        restult = restult * i;
        i--;
    }
    return restult;
}

const factorialNumber = findFactorial(5);
console.log(factorialNumber);