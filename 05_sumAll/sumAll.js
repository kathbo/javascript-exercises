const sumAll = function(a, b) {
    let bigger = Math.max(a,b);
    let smaller = Math.min(a,b);
    let sum = 0;
    for (let x = smaller; x <= bigger; x++) {
      sum += x;
    }
    return (a < 0 || b < 0 || typeof(a) != 'number' || typeof(b) != 'number') ? "ERROR" : sum;
  };
  

// Do not edit below this line
module.exports = sumAll;
