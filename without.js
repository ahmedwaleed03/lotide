// without function implementation
const without = function(source, itemsToRemove) {
  let finalArr = [];

  // nested loop to go through both arrays
  for (let i = 0; i < source.length; i++) {
    // value to determine if something needs to be removed
    let found = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        found = true;
        break;
      }
    }
    if (found === false) {
      finalArr.push(source[i]);
    }
  }

  return finalArr;
};

// export the without function
module.exports = without;