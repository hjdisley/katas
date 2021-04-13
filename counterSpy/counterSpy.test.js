const counterSpy = require('./counterSpy');

describe('counterSpy', () => {
  it('the output of counterSpy is an array', () => {
    expect(counterSpy([])).toEqual([]);
  });
  it('the output of counterSpy is an array which includes names', () => {
    expect(counterSpy(['Daryl'])).toEqual(['Daryl']);
  });
  it('counterSpy can put names which include spy in an array', () => {
    expect(counterSpy(['Daryl', 'Harriet', 'Hayden'])).toEqual([
      'Daryl',
      'Hayden',
    ]);
  });
  it('Returns new array in alphabetical order', () => {
    expect(
      counterSpy(['James', 'Harriet', 'Hayden', 'Adam', 'Daryl'])
    ).toEqual(['Daryl', 'Hayden', 'James']);
  });
});
