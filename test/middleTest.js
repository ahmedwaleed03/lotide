// import functions
const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

// test middle
assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([1 , 2]),[]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]);
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]);