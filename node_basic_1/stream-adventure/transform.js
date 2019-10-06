/*
 Convert data from `process.stdin` to upper-case data on `process.stdout`
 using the `through2` module.
 */

const through = require('through2');

function write(buffer, encoding, next) {
  this.push(buffer.toString('utf8').toUpperCase());
  next();
}

function end(done) {
  done();
}

const stream = through(write, end);

process.stdin.pipe(stream).pipe(process.stdout);
