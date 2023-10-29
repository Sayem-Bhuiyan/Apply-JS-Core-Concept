//  1 * 2 * 3 * .... * n

function multipicationOfNumber(number){
    let restult = 1;
    for ( let i = 1; i <= number; i++){
        restult = restult * i;
    }
    return restult;
}
let number = 7;
const restult = multipicationOfNumber(number);
console.log(restult);