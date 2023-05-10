const drzwi = require('fs').promises;

(async () => {
  try {
    await drzwi.writeFile('./numbers.txt', '100', 'utf8');
    console.log('Saved file.');
  } catch (error) {
    console.log('oh no!:', error);
  }
})();
