import {pushWordLeft} from './index.js';

const it = (title, testCode) => {
  try {
    testCode();
  } catch (error) {
    console.error(error);
  }
};

const expect = (result) => {
  return {
    toBe: (expected) => {
      if (result !== expected) {
        throw new Error('같지 않습니다.');
      }
      console.log('일치합니다.');
    },
  };
};

it('왼쪽으로 count만큼 단어 밀기', () => {
  expect(pushWordLeft('apple', 3)).toBe('apple');
});
