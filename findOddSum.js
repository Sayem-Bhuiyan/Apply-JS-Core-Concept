

// let numberArray = [4, 7, 10, 90, 59, 23, 34, 55, 11];

// function findOddSum(numberArray) {
//     let oddNumber = [];
//     let sum = 0;
//     for ( var i = 0; i < numberArray.length; i++) {

//         let newNumber = numberArray[i];
        
//         if ( newNumber % 2 !== 0){
//             oddNumber.push(newNumber);
//         }
//         sum = sum + newNumber;
//     }
//     let oddArray = oddNumber;
//     let result = sum;
//     return [oddArray, result];
// }

// let summetion = findOddSum(numberArray);
// console.log(summetion);

function getSumOfAnArray(numbers){
    let sum = 0;
    for( let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[i];
        sum = sum + element;
    }
    return sum;
}

function getOddNumberOfAnArray(numbers){
    let oddNumbers = [];
    for ( let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        // conditon for find odd number
        if (element % 2 !== 0){
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}

let numbers = [23, 11, 34, 23, 54, 34, 67, 87, 56];
console.log(numbers);
const oddNumers = getOddNumberOfAnArray(numbers);
console.log('The Odd element array: ', oddNumers);

const sumOfOddArray = getSumOfAnArray(oddNumers);
console.log('The sum of the odd element: ', sumOfOddArray);