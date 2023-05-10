const { promisify } = require('util');
const exec = promisify(require('child_process').exec);

const data = process.argv[2];

(async () => {
  try {
    if (data === 'Kalkulator') {
      await exec('calc.exe');
    }
    if (data === 'Paint') {
      await exec('mspaint.exe');
    }
  } catch (e) {
    console.log('Oh no!:', e.stdout);
  }
})();
