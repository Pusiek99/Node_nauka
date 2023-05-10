const http = require('http');

const { readFile } = require('fs').promises;

const server = http.createServer();
server.on('request', async (req, res) => {
  const tibia = await readFile('./index.html', 'utf-8');

  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(tibia);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>404 Not Found</h1>\n');
  }
}).listen(3000, 'localhost');
