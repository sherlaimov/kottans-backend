let cnt = 0;
const reduce = (array, f, initVal) => {
  if (cnt >= array.length) return initVal;

  const acc = f(initVal, array[cnt], cnt, array);
  cnt++;
  return reduce(array, f, acc);
};

module.exports = reduce;
