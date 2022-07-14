
/** Converts a number into a string formatted with commas added for readability
 * 
 * @param {number} number integer or decimal, positive or negative
 * @returns {string} The returning value is a string with commas added
 * 
 * Example: -1234 => "-1,234"
 * Example: 4563893.2 => "4,563,893.2"
 */

function addCommas(number) {
    // convert number into an array of string characters
    const arrOfDigits = Array.from(String(number));

    // we will add a comma three spaces before the end (or decimal point)
    let commaIdx = arrOfDigits.length - 3
    if (arrOfDigits.indexOf(".") != -1) {
        commaIdx = arrOfDigits.indexOf(".") - 3
    }

    // we will stop adding commas at the start of the array (or before the negative symbol)
    let stopIdx = 0;
    if (arrOfDigits[0] === "-") {
        stopIdx = 1;
    }

    // continue adding commas until we hit the beginning of the number
    while (commaIdx > stopIdx) {
        arrOfDigits.splice(commaIdx, 0, ",");
        commaIdx -= 3
    }

    // join the array back into a string and return it
    return arrOfDigits.join("")
}

module.exports = addCommas;