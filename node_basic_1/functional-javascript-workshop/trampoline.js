function repeat(operation, num) {
  if (num <= 0) return null;

  return () => {
    operation();
    return repeat(operation, --num);
  };
}

function trampoline(fn) {
  let next = fn;
  while (next) {
    next = next();
  }
}

module.exports = function(operation, num) {
  trampoline(repeat(operation, num));
};
