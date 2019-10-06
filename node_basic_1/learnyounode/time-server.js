const port = parseInt(process.argv[2], 10);

const net = require('net');

const getDateStr = date =>
  `${date.getFullYear()}-${
    date.getMonth() + 1 > 9 ? date.getMonth() + 1 : '0' + String(date.getMonth() + 1)
  }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}\n`;

const server = net.createServer(function(socket) {
  socket.end(getDateStr(new Date()));
});
server.listen(port);
