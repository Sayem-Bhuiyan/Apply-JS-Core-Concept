// find the sum of an array using function

function getSumOfAnArray(numbers){
    let sum = 0;
    for( let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[i];
        sum = sum + element;
        // console.log(index, element, sum);
    }
    return sum;
}
let numbers = [23, 12, 34, 54, 32, 13, 32, 21];
let sumOfArray =  getSumOfAnArray(numbers);
console.log(sumOfArray);