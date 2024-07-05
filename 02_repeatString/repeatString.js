const repeatString = function(string, numberOfTimes) {
    if (numberOfTimes < 0) return 'ERROR';
    let repeatedString = '';
    for (let i = 0; i < numberOfTimes; i++) {
        repeatedString = repeatedString + string;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
