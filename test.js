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
