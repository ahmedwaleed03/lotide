// import functions
const without = require('../without');
const assert = require('chai').assert;

// test case to test the function
describe("#without", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });
  it("returns ['1', '2'] for ['1', '2', '3'], [1, 2, '3']", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });
  // ensure original array is untouched
  it ("original array is untouched after using without", () => {
    const array = ["hello", "world", "lighthouse"];
    without(array, ["lighthouse"]); // no need to capture return value for this test case
    assert.deepEqual(array, ["hello", "world", "lighthouse"]);
  });
});