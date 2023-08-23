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

const eqObjects = function(object1, object2) {
  const objKeys1 = Object.keys(object1);
  const objKeys2 = Object.keys(object2);

  if (objKeys1.length !== objKeys2.length) {
    return false;
  }

  for (let key of objKeys1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }

  return true;
};

// assertObjectsEqual function implementation
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected) === true) {
    console.log(`✅✅✅ Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// tests
assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });
assertObjectsEqual({ b: 2, a: '3' }, { b: 6, a: '1' });