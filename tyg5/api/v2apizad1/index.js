const { createServer } = require('http');
const { stringify } = require('querystring');

const server = createServer();

let counter = 0;

server.on('request', (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    res.end(`Byles na stronie ${counter++} razy.`);
  }
});

server.listen(3001, 'localhost');
