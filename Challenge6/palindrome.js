/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str = x.toString();

    let reversedStr = [...str].reverse().join('');

    if( str == reversedStr ) {
        return true;
    }
    else{
        return false;
    }
}