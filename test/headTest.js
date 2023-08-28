// import functions
const head = require('../head');
const assertEqual = require('../assertEqual');

// test cases to test the function
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");