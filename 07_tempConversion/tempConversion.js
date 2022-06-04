const ftoc = function(F) { // F -> C
  let cel = (F - 32) * 5/9;
  return Math.round(cel * 10) / 10
};

const ctof = function(C) {
  let far = C * 9/5 + 32;
  return Math.round(far * 10) / 10
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
