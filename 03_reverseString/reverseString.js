const reverseString = function(str) {
    let arr = str.split(''); // str -> arr
    arr.reverse();
    return arr.join('');
  };

// Do not edit below this line
module.exports = reverseString;
