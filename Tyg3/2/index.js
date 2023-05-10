const { promisify } = require('util');
const exec = promisify(require('child_process').exec);

// exec('dir')
//   .then((data) => {
//     console.log(data.stdout);
//  });

// exec('dir')
//   .then(({ stdout, stderr }) => {
//     console.log(stdout, stderr);
//   });

// (async () => { // IIFE - immediately involved function expression
//   const data = await exec('ping 8.8.8.8');
//   console.log(data.stdout);
// })();

// (async () => { // wersja z destrukturyzacją
//   const { stdout } = await exec('ping 8.8.8.8');
//   console.log(stdout);
// })();

(async () => { // wersja z destrukturyzacją
  try {
    const ip = process.argv[2];

    const { stdout } = await exec(`ping ${ip}`);
    console.log(stdout);
  } catch (e) {
    console.error('Oh no!', e.stdout);
  }
})();
