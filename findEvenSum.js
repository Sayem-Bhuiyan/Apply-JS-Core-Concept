function findEvenSum(numbers){
    let evenNumbers = [];
    let sum = 0;
    for( let i = 0; i < numbers.length; i++){
        let element = numbers[i];
        if(element % 2 === 1){
            continue;
        }
        sum = sum + element;
        evenNumbers.push(element);
    }
    console.log(evenNumbers);
    return sum;
}

const numbers = [ 2, 34, 21, 43, 45, 23, 44, 22, 54];
const evenArray = findEvenSum(numbers);
console.log(evenArray);