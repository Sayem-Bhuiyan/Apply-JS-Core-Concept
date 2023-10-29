// 1 + 2 + 3 + 4 + 5 + ....... + n

function sumOfNumbers(number){
    let sum = 0;
    for ( let i = 1; i <= number; i++){
        sum = sum + i;
    }
    return sum;
}

let sumOfSeries = sumOfNumbers(30);
console.log(sumOfSeries);