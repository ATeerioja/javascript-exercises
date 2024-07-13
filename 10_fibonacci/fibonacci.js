const fibonacci = function(stopHere) {

  let start = 1;
  let second = 1;

  if(stopHere < 0) return "OOPS";
  if(stopHere == 0) return 0;
  if(stopHere <= 2) return 1;

  for(let i = 2; i < stopHere; i++) {
    sum = start + second
    start = second
    second = sum
  }

  return sum;


};

// Do not edit below this line
module.exports = fibonacci;
