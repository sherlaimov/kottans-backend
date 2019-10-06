const map = (array, f, thisArg) => {
  return array.reduce((acc, item, idx, arr) => {
    acc.push(f.call(thisArg, item, idx, arr));
    return acc;
  }, []);
};

module.exports = map;
