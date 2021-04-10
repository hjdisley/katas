splitStrings = (str) => {
  if (!str) return [];
  if (str.length % 2 !== 0) {
    const splitArr = str.concat('_').match(/.{1,2}/g);
    return splitArr;
  }
  return str.match(/.{1,2}/g);
};

module.exports = splitStrings;

// Last element is in an array
// need to add an underscore to the last element
// then need to push it back into the array

// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']

/*
[x] - Splits string into individual letters
[x] - Splits string into two letters 
[x] - Pushes these strings into an array 
[x] - If the string contains an odd number push that letter into an array and follow it with an _
*/
