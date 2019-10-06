const http = require('http');
const fs = require('fs');

const port = parseInt(process.argv[2], 10);
const filePath = process.argv[3];

const server = http.createServer(function(req, res) {
  fs.createReadStream(filePath).pipe(res);
});
server.listen(port);
