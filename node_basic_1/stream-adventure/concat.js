const concat = require('concat-stream');

const stream = concat(data => {
  const reversed = data
    .toString()
    .split('')
    .reverse()
    .join('');
  console.log(reversed);
});

process.stdin.pipe(stream);
