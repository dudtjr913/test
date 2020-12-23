const {pushWordLeft, pushWordRight} = require('./index.js');

describe('단어 밀어내기', () => {
  it('왼쪽으로 단어 count만큼 밀어내기', () => {
    expect(pushWordLeft('apple', 3)).toBe('leapp');
  });

  it('오른쪽으로 단어 count만큼 밀어내기', () => {
    expect(pushWordRight('apple', 3)).toBe('pleap');
  });
});
