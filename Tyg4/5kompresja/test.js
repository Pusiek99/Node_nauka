const { createReadStream } = require('fs');

const createReader = createReadStream('test.txt');
createReader.on('data', (data) => console.log(data));
