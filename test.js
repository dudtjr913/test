import {pushWordLeft} from './index.js';

const describe = (result) => {
  return {
    toBe: (expected) => {
      if (result !== expected) {
        throw new Error('같지 않습니다.');
      }
      console.log('일치합니다.');
    },
  };
};

describe(pushWordLeft('apple', 3)).toBe('leapp');
describe(pushWordLeft('apple', 3)).toBe('apple');
