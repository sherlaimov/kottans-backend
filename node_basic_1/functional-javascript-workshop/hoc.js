const hoc = (f, n) => {
  if (n === 0) return;
  f();
  n = n - 1;
  return hoc(f, n);
};

module.exports = hoc;
