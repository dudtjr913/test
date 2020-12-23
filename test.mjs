import {pushWordLeft} from './index.mjs';

const it = (title, testCallback) => {
  try {
    testCallback();
    console.log(`✔ ${title}`);
  } catch (error) {
    console.log(`❌ ${title}`);
    console.error(error);
  }
};

const expect = (result) => {
  return {
    toBe: (expected) => {
      if (result !== expected) {
        throw new Error(`${result}와 ${expected}가 같지 않습니다.`);
      }
    },
  };
};

it('왼쪽으로 count만큼 단어 밀기', () => {
  expect(pushWordLeft('apple', 3)).toBe('apple');
});
