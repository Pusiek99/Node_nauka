// exec wersja callbackowa

const { promisify } = require('util');
const exec = promisify(require('child_process').exec);

// (async () => {
//   try {
//     const { stdout } = await exec('node test.js', {
//       env: { // env - przekazywanie zmiennych srodowiskowych
//         NODE_ENV: 'production',
//       },
//     });
//     console.log(stdout);
//   } catch (e) {
//     console.log('Oh no', e);
//   }
// })();

// (async () => {
//   try {
//     const { stdout } = await exec('mdkir tibia');
//
//     console.log(stdout);
//   } catch (e) {
//     console.log('Oh no', e);
//   }
// })();

// (async () => {
//   try {
//     const { stdout } = await exec('mkdir tibia', {
//       cwd: 'C:\\', // 'powiedzenie' programowi, gdzie sie znajduje/ gdzie sie ma wykonać
//     });
//     console.log(stdout);
//   } catch (e) {
//     console.log('Oh no', e);
//   }
// })();

(async () => {
  try {
    const { stdout } = await exec('npm i', {
      timeout: 1000 * 60 * 60,
    });
    console.log(stdout);
  } catch (e) {
    console.log('Oh no', e);
  }
})();
