const sum = process.argv
  .slice(2)
  .map(arg => parseInt(arg, 10))
  .reduce((a, b) => a + b);
console.log(sum);
