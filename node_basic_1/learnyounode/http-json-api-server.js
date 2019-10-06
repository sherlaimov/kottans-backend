const http = require('http');
const port = process.argv[2];
const baseUrl = `http://localhost:${port}`;

const server = http.createServer(function(req, res) {
  const url = new URL(req.url, baseUrl);
  const { pathname } = url;
  const time = url.searchParams.get('iso');
  const date = new Date(time);

  if (pathname === '/api/parsetime') {
    const payload = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds(),
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(payload));
    console.log(payload);
  }
  if (pathname === '/api/unixtime') {
    const payload = {
      unixtime: date.getTime(),
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(payload));
    console.log(payload);
  }
});

server.listen(port);
