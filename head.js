// assertEqual function implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

// head function implementation
const head = function(arr) {
  if (arr === undefined || arr.length === 0) {
    return undefined;
  } else {
    return arr[0];
  }
};

// test cases to test the function
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");