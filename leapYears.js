function checkLeapYear(year) {
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        return year + ' is a leap year';
    } else {
        return year + ' is not a leap year';
    }
}

const result = checkLeapYear("2025");
console.log(result);