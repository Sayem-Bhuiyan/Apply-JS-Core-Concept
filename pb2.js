// make a different array of the leap year from a existing array

function findLeapYear(years){
    let leapYear = [];
    for (let i = 0; i < years.length; i++){
        let year = years[i];
        if( year % 4 == 0){
            leapYear.push(year);
        }
    }
    return leapYear;
}

let years = [2020, 2021, 2022, 2023, 2024];
const leapYearArray = findLeapYear(years);
console.log(leapYearArray);