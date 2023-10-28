// Peter's school teacher asked him to write a program that would return if a number is even and false if a number is odd. Help peter write the program.
// input: The first and second input lines contain the numbers.
// output: Print true if the number is an even number and false if the number is an odd number.


function isEven(number){

    const reminder = number % 2;
    
    if (reminder == 0) {
        return true;
    }
    else {
        return false
    }
}


const number1IsEven = isEven(45);
console.log(number1IsEven);
const number2IsEven = isEven(86);

console.log(number2IsEven);