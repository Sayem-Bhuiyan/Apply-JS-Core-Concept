// convert miles to kilometer

function milesToKm(miles) {
    const km = miles * 1.60934;
    return km;
}

const distance = 2;
const kilometer = milesToKm(distance);
console.log(kilometer);