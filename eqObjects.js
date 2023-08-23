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

// assertEqual function implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
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

// test code
// primitive
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject , anotherShirtObject), true); // => true

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false); // => false

// arrays
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true); // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false); // => false