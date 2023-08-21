// assertEqual function implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

// tail function implementation
const tail = function(arr) {
  let finalArr = [];
  if (arr === undefined || arr.length === 0 || arr.length === 1) {
    return finalArr;
  } else {
    finalArr = arr.slice(1);
    return finalArr;
  }
};

// Test the returned array
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");