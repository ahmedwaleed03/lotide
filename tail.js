// import the assertEqual function
const assertEqual = require('./assertEqual');

// tail function implementation
const tail = function(arr) {
  let finalArr = [];
  if (arr === undefined || arr.length === 0 || arr.length === 1) {
    return finalArr;
  } else {
    finalArr = arr.slice(1);
    return finalArr;
  }
};

// export the tail function
module.exports = tail;