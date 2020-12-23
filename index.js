const pushWordLeft = (word, count) => {
  const splitedWord = word.split('');
  const pushedWord = splitedWord.splice(0, count);
  const result = [...splitedWord, ...pushedWord];

  return result.join('');
};

const pushWordRight = (word, count) => {
  const splitedWord = word.split('');
  const pushedWord = splitedWord.splice(word.length - count);
  const result = [...pushedWord, ...splitedWord];

  return result.join('');
};

exports.pushWordLeft = pushWordLeft;
exports.pushWordRight = pushWordRight;
