const { readFile, writeFile } = require('fs').promises;

(async () => {
  const data = await (readFile('./data/input1.json', 'utf8'));
  const numbers = JSON.parse(data);
  const sum = numbers.reduce((a, b) => a + b);
  try {
    await writeFile('./data/sum.txt', `${JSON.stringify(sum)}`, 'utf8');
    console.log('File saved successfully.');
  } catch (err) {
    console.log('Oh no!:', err);
  }
})();
