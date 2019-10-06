const http = require('http');
const through = require('through2');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    req
      .pipe(
        // eslint-disable-next-line func-names
        through(function(chunk, enc, next) {
          this.push(chunk.toString().toUpperCase());
          next();
        })
      )
      .pipe(res);
  }
});
server.listen(process.argv[2]);
