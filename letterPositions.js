// letterPositions function implementation
const letterPositions = function(sentence) {
  const results = {};
  
  // loop through the sentence
  for (let i = 0; i < sentence.length; i++) {
    // skip iteration if letter is space
    if(sentence[i] === ' ') {
      continue;
    }
    if (results[sentence[i]] === undefined) {
      results[sentence[i]] = [i];
    } else {
      results[sentence[i]].push(i);
    }
  }
  return results;
};

// export the letterPositions function
module.exports = letterPositions;