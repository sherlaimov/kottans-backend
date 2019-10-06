/*
Your program will get some html written to stdin. Convert all the inner html to
upper-case for elements with a class name of "loud",
and pipe all the html to stdout.
 */

const trumpet = require('trumpet');
const through = require('through2');

const tr = trumpet();

// All occurances
const loud = tr.select('.loud').createStream();
loud
  .pipe(
    // eslint-disable-next-line func-names
    through(function(buf, _, next) {
      this.push(buf.toString().toUpperCase());
      next();
    })
  )
  .pipe(loud);

process.stdin.pipe(tr).pipe(process.stdout);

/* ONLY ONE OCCURANCE

const loudStream = tr.createStream('.loud');
loudStream.on('data', data => {
  loudStream.write(data.toString().toUpperCase());
});

loudStream.on('end', () => {
  loudStream.end();
});

*/
