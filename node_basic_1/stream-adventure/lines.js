const through = require('through2');
const split = require('split');

// RUN
// echo -e 'one\ntwo\nthree' | node

let cnt = 0;
process.stdin
  .pipe(split())
  .pipe(
    // eslint-disable-next-line func-names
    through(function(line, _, next) {
      const lineStr = line.toString();
      if (cnt % 2 === 0) {
        this.push(`${lineStr.toLowerCase()}\n`);
      } else {
        this.push(`${lineStr.toUpperCase()}\n`);
      }
      cnt += 1;
      next();
    })
  )
  .pipe(process.stdout);
