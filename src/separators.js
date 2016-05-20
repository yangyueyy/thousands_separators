'use strict';

function thousands_separators(num) {
    var numStrings = num.toString().split(".");
    var dotBeforeString = tidyDotBeforeString(numStrings[0]);

    if (numStrings[1]) {

        return dotBeforeString + '.' + numStrings[1];
    }
    else {

        return dotBeforeString;
    }
}

function tidyDotBeforeString(numString) {

    return numString.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
}

module.exports = thousands_separators;
