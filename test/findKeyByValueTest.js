// import functions
const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;

// test case to test the function
describe("#findKeyByValue", () => {
  it("returns 'drama' for {sci_fi: 'The Expanse', comedy: 'Brooklyn Nine-Nine', drama: 'The Wire'} ,  'The Wire'", () => {
    const bestTVShowsByGenre = { 
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it("returns undefined for {sci_fi: 'The Expanse', comedy: 'Brooklyn Nine-Nine', drama: 'The Wire'} ,  'That '70s Show'", () => {
    const bestTVShowsByGenre = { 
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
});