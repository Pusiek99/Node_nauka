const { readFile, appendFile } = require('fs').promises;

const FILE_NAME = './numbers.txt';

(async () => {
  try {
    const numberFromFile = (await readFile(FILE_NAME, 'utf8')).split('\n');
    await appendFile(FILE_NAME, `\n${Number(numberFromFile.slice(-1) * 2)}`, 'utf8');
    console.log('File is saved');
  } catch (error) {
    console.log('Oh no!', error);
  }
})();
