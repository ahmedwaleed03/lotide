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

// ----------------------------------------
// map function implementation
const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  return results;
}

// testing 
// get first letter
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);

// add ten
const nums = [1, 2, 3, 4, 5];
const addTen = map(nums, num => num + 10);
assertArraysEqual(addTen, [11, 12, 13, 14, 15]);

// subtract ten
const numsTwo = [11, 12, 13, 14, 15];
const subtractTen = map(numsTwo, num => num - 10);
assertArraysEqual(subtractTen, [1, 2, 3, 4, 5]);