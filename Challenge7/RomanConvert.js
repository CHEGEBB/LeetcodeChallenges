/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // Create a hashmap for Roman numerals
    let hashMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    // Initialize the total to 0
    let total = 0;

    // Loop through the string
    for (let i = 0; i < s.length; i++) {
        // Get the value of the current Roman numeral
        let current = hashMap[s[i]];

        // Get the value of the next Roman numeral (if it exists)
        let next = hashMap[s[i + 1]];

        // If the next numeral is larger, subtract the current value
        if (next && current < next) {
            total -= current;
        } else {
            // Otherwise, add the current value
            total += current;
        }
    }

    return total;
};
