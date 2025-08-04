const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hi everyone');
});

server.listen(8002, () => {
  console.log('Hi service listening on port 8002');
});
