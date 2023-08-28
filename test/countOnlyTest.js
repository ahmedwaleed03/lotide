// import functions
const countOnly = require('../countOnly');
const assert = require('chai').assert;

// test case to test the function
describe("#countOnly", () => {
  it("returns {Fang: 2, Jason: 1} for ['Karl', 'Salima', 'Agouhanna', 'Fang', 'Kavith', 'Jason', 'Salima', 'Fang', 'Joe'] , { 'Jason': true, 'Karima': true, 'Fang': true, 'Agouhanna': false } ", () => {
    const expectedResult = {Fang: 2, Jason: 1}
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    assert.deepEqual(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }), expectedResult);
  });
});