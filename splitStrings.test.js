const splitStrings = require('./splitStrings');

describe('splitStrings', () => {
  it('outputs an empty array when passed an empty string', () => {
    expect(splitStrings('')).toEqual([]);
  });
  it('Splits strings into pairs of letters when passed a string with an even number of characters', () => {
    expect(splitStrings('abcd')).toEqual(['ab', 'cd']);
  });
  it('When string length is odd returns last string plus an underscore', () => {
    expect(splitStrings('abcdefg')).toEqual(['ab', 'cd', 'ef', 'g_']);
  });
});

// describe("Split Strings", () => {
//   it("Basic tests", () => {
//     assert.deepEqual(solution("abcdef"), ["ab", "cd", "ef"]);
//     assert.deepEqual(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
//     assert.deepEqual(solution(""), []);
//   });
// });
