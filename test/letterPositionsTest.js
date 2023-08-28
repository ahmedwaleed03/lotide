// import functions
const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

// test case to test the function
describe("#findKeyByValue", () => {
  it("returns [3, 5, 15, 18] for the positions of h in the text 'lighthouse in the house'", () => {
    const expectedResult = [3, 5, 15, 18];
    assert.deepEqual(letterPositions("lighthouse in the house").h, expectedResult);
  });
  it("returns [9, 16, 22] for the positions of e in the text 'lighthouse in the house'", () => {
    const expectedResult = [9, 16, 22];
    assert.deepEqual(letterPositions("lighthouse in the house").e, expectedResult);
  });
});