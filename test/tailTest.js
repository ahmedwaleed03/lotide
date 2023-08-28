// import functions
const tail = require('../tail');
const assertEqual = require('../assertEqual');

// Test the returned array
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");