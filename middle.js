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

// assertArraysEqual function implementation
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✅✅✅ Assertion passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${arr1} !== ${arr2}`);
  }
};

// middle function implementation
const middle = function(array) {
  const result = [];
  let middleIndex = 0;

  if (array === undefined || array.length === 0 || array.length === 1 || array.length === 2) {
    return result;
  } else if (array.length % 2 === 0) {
      middleIndex = array.length/2;
      result.push(array[middleIndex - 1]);
      result.push(array[middleIndex]);
  } else {
    middleIndex = Math.floor(array.length/2);
    result.push(array[middleIndex]);
  }
  return result;
};

// test middle
assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([1 , 2]),[]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]);
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]);