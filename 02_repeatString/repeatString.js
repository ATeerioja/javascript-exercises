const repeatString = function(repeatedString, timesRepeat) {
  if(timesRepeat < 0) {
    return "ERROR";
  }
  
  
  let i = 0;
  let compoundString  = "";
  while(i < timesRepeat) {
    compoundString += repeatedString;
    i++
  }
  return compoundString;
};

// Do not edit below this line
module.exports = repeatString;
