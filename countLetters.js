// assertEqual function implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

// countLetters function implementation
const countLetters = function(sentence) {
  const lettersFound = {};

  // remove all spaces and change all letters to lower case 
  let edittedSentence = sentence.replace(/ /g, '').toLowerCase();
  
  // loop through the sentence and update counter as needed
  for (letter of edittedSentence) {
    if (lettersFound[letter] === undefined) {
      lettersFound[letter] = 1;
    } else {
      lettersFound[letter]++;
    }
  }

  // return object containing letters found
  return lettersFound;
};

const result = countLetters("lighthouse in the house");

assertEqual(result.l, 1);
assertEqual(result.i, 2);
assertEqual(result.g, 1);
assertEqual(result.h, 4);
assertEqual(result.t, 2);
assertEqual(result.o, 2);
assertEqual(result.u, 2);
assertEqual(result.s, 2);
assertEqual(result.e, 3);
assertEqual(result.n, 1);