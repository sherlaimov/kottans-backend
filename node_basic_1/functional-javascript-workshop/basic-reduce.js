const countWords = words =>
  words.reduce((acc, b) => {
    if (acc.hasOwnProperty(b)) {
      acc[b] = acc[b] += 1;
    } else {
      acc[b] = 1;
    }
    return acc;
  }, {});

module.exports = countWords;
