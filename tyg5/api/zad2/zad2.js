// const { createServer } = require('http');
//
// const server = createServer();
//
// server.on('request', (req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   const calc = (req.url).split('/');
//   if (calc[1] === 'add') res.end(`result = ${Number(calc[2]) + Number(calc[3])}`);
//   if (calc[1] === 'sub') res.end(`result = ${Number(calc[2]) - Number(calc[3])}`);
//   if (calc[1] === 'mul') res.end(`result = ${Number(calc[2]) * Number(calc[3])}`);
//   if (calc[1] === 'div') res.end(`result = ${Number(calc[2]) / Number(calc[3])}`);
// }).listen(3000, 'localhost');

const { createServer } = require('http');

const server = createServer();

server.on('request', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  let [, operation, a, b] = (req.url).split('/');
  a = Number(a);
  b = Number(b);
  switch (operation) {
    case 'add': res.end(`result = ${a + b}`); break;
    case 'sub': res.end(`result = ${a - b}`); break;
    case 'mul': res.end(`result = ${a * b}`); break;
    case 'div': res.end(`result = ${a / b}`); break;
    default: res.end('Invalid operation');
  }
}).listen(3000, 'localhost');
