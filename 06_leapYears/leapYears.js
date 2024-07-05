const leapYears = function(year) {
    /*leap year is any year divisble by 4, except for years divisible
    by 100 that are not divislbe by 400.*/
    if (year % 100 === 0) {
        if (year % 400 != 0) {
            return false;
        }
    }
    else if (year % 4 === 0)
        return true;
    else 
        return false;
};

// Do not edit below this line
module.exports = leapYears;
