const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello world');
});

server.listen(8001, () => {
  console.log('Hello service listening on port 8001');
});
