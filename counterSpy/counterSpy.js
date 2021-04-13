const counterSpy = (arr) => {
  if (!arr.length) return arr;
  const spies = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes('s') || arr[i].includes('p') || arr[i].includes('y')) {
      spies.push(arr[i]);
    }
  }
  return spies.sort();
};

module.exports = counterSpy;

// Counter Spy
// For this kata, you need to write a function called counterSpy. It takes an array of names. The function should return an array containing the names of the people who are spies.
// Recent intelligence has revealed that all spies codenames include the letters 's', 'p' or 'y'. You can't afford to take any chances.

// EXTRA CREDIT:
// Also, our spy admin team have asked that the names come back in alphabetical order, for spy filing purposes. So if you could do that you'd really be saving them a lot of work. Thanks.
