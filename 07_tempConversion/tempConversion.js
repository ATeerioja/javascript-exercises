const convertToCelsius = function(temperature) {
  return(round((temperature-32)*(5/9)))

};

const convertToFahrenheit = function(temperature) {
  return(round(temperature*(9/5)+32))
};

function round(number) {
  return (Math.round(number*10) /10);
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
