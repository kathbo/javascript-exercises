const removeFromArray = function(arr, n) {
    return arr.filter((el) => {
      if (el !== n) {
        return el
      }})
    };

// Do not edit below this line
module.exports = removeFromArray;
