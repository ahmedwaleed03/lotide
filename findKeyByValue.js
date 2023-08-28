// findKeyByValue function implementation
const findKeyByValue = function(obj, val) {
  const keys = Object.keys(obj);
  
  for (let key of keys) {
    if (obj[key] === val) {
      return key;
    }
  }

  return undefined;
};

// export the findKeyByValue function
module.exports = findKeyByValue;

