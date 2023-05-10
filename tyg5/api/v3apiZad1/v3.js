const { createServer } = require('http');
const { readFile, writeFile } = require('fs').promises;

const server = createServer();
let counter = 0;
(async () => {
  counter = await readFile('./viewCounter.txt', 'utf8');
  if (counter === null) {
    counter = 0;
  }
})();

server.on('request', (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Byles na stronie ${counter++} razy.`);
  }
  (async () => {
    await writeFile('./viewCounter.txt', `${counter}`, 'utf8');
  })();
  console.log('req.url = ', req.url);
});
server.listen(3001, 'localhost');
