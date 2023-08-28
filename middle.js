// middle function implementation
const middle = function(array) {
  const result = [];
  let middleIndex = 0;

  if (array === undefined || array.length === 0 || array.length === 1 || array.length === 2) {
    return result;
  } else if (array.length % 2 === 0) {
      middleIndex = array.length/2;
      result.push(array[middleIndex - 1]);
      result.push(array[middleIndex]);
  } else {
    middleIndex = Math.floor(array.length/2);
    result.push(array[middleIndex]);
  }
  return result;
};

// export the middle function
module.exports = middle;