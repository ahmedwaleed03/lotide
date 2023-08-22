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
const without = function(source, itemsToRemove) {
  let finalArr = [];

  // nested loop to go through both arrays
  for (let i = 0; i < source.length; i++) {
    // value to determine if something needs to be removed
    let found = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        found = true;
        break;
      }
    }
    if (found === false) {
      finalArr.push(source[i]);
    }
  }

  return finalArr;
};

// Test Cases
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

// ensure original array is untouched
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);