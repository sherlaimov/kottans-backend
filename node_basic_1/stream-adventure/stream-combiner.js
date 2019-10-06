const combine = require('stream-combiner');
const split = require('split');
const through2 = require('through2');
const zlib = require('zlib');

module.exports = () => {
  let currLine;

  const transform = through2(
    // eslint-disable-next-line func-names
    function(chunk, enc, cb) {
      if (chunk.length === 0) return cb();
      const line = JSON.parse(chunk);

      if (line.type === 'genre') {
        if (currLine) {
          this.push(`${JSON.stringify(currLine)}\n`);
        }
        currLine = { name: line.name, books: [] };
      } else {
        currLine.books.push(line.name);
      }

      return cb();
    },
    function end(done) {
      this.push(JSON.stringify(currLine));
      done();
    }
  );
  const combined = combine(split(), transform, zlib.createGzip());
  return combined;
};
