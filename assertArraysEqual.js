// import the eqArrays function
const eqArrays = require('./eqArrays');

// assertArraysEqual function implementation
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✅✅✅ Assertion passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${arr1} !== ${arr2}`);
  }
};

// export the assertArraysEqual function
module.exports = assertArraysEqual;