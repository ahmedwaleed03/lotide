// import the assertEqual function
const assertEqual = require('./assertEqual');

// head function implementation
const head = function(arr) {
  if (arr === undefined || arr.length === 0) {
    return undefined;
  } else {
    return arr[0];
  }
};

// export the assertEqual function
module.exports = head;