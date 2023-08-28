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

// export the countLetters function
module.exports = countLetters;