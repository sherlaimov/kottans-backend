const spy = (target, method) => {
  const result = { count: 0 };
  const newF = target[method].bind(target);

  target[method] = (...args) => {
    result.count++;
    return newF(...args);
  };
  return result;
};

module.exports = spy;
