/* eslint-disable no-underscore-dangle */
const duplexer2 = require('duplexer2');
const through2 = require('through2');

module.exports = counter => {
  // return a duplex stream to count countries on the writable side
  // and pass through `counter` on the readable side
  const counts = {};
  const transform = through2(
    { objectMode: true },
    // eslint-disable-next-line func-names
    function(chunk, enc, cb) {
      counts[chunk.country] = (counts[chunk.country] || 0) + 1;
      cb();
    },
    done => {
      counter.setCounts(counts);
      done(null);
    }
  );

  const s = duplexer2({ objectMode: true }, transform, counter);

  return s;
};
