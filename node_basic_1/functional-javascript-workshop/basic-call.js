const duckCount = (...args) => {
  const result = args.reduce((acc, b) => {
    if (Object.prototype.hasOwnProperty.call(b, 'quack')) {
      acc += 1;
    }
    return acc;
  }, 0);
  return result;
};

module.exports = duckCount;
