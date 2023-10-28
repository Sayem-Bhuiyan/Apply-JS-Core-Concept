// check the year is leap year or not

function isLeapYear(year) {
    const reminder = year % 4;

    if ( reminder === 0) {
        return true;
    }
    else {
        return false;
    }
}

const isMyYear = isLeapYear(2025);
console.log(isMyYear);
const isYourYear =  isLeapYear(2024);
console.log(isYourYear);