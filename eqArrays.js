// eqArrays function implementation
const eqArrays = function(arr1, arr2) {
  // check if array lengths are the same
  if (arr1.length !== arr2.length) {
    return false;
  }

  // iterate through both arrays to ensure each element is the same
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      // return false if any variable is different
      return false;
    }
  }

  // return true if all variables are equeal
  return true;
};

// export the eqArrays function
module.exports = eqArrays;