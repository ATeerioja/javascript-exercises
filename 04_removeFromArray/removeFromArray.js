const removeFromArray = function(array, ...removeThis) {
  
  let shortArray = array;

  for (let remove of removeThis) {
    while(shortArray.indexOf(remove) > -1) {
      shortArray.splice((array.indexOf(remove)), 1);
    }

  }
  
  return shortArray

};

// Do not edit below this line
module.exports = removeFromArray;
