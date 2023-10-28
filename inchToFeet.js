// convert inch to feet using function

function inchToFeet(inch) {
    var feet = inch / 12;
    return feet;
}

const sayemHeightInInch = 71;
const somaiaHeightInInch = 64;

const sayemFeet = inchToFeet(sayemHeightInInch);
console.log(sayemFeet);

const somaiaFeet = inchToFeet(somaiaHeightInInch);
console.log(somaiaFeet);
