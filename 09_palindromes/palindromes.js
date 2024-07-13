const palindromes = function (string) {

  let alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";

  let cleansedString = string
  .toLowerCase()
  .split("")
  .filter((character) => alphanumerical.includes(character))
  .join("");

  const reversedString = cleansedString.split("").reverse().join("");

  return reversedString === cleansedString;

};

// Do not edit below this line
module.exports = palindromes;
