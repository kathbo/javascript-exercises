const removeFromArray = function(arr, ...n) {
    for (let el of n) { // 2 and 4
      for (let x = 0; x < arr.length; x++) {
        if (arr[x] === el) {
          arr.splice(x, 1)
        }
      }
    }
    return arr
}

// Do not edit below this line
module.exports = removeFromArray;
