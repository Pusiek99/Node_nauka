// const { createHmac } = require('crypto');
//
// const salt = 'dasijbda9spudh9ASDAS*D&GG*G*&S*&G *)GD *)GD *A)SGD *A)GD *)ASGD A*SDG^0a 8s6dgaishgdkhb as80dglkuhgasd86gaksuASKDLJBASD(PS&H*A *AS&DGAUIOS^UDG*U^ASGIDYG ASUD^FGUAS^DGdg';
// const hash = createHmac('sha512', salt) // stworz funkcję skrótu (hash) korzystając z algorytmu sha512, dodając do
// // hashowanego tekstu stworzoną przez nas sól (salt)
//   .update('Tekst do zhashowania') //
//   .digest('hex');
// console.log(hash);

/// /////////////////////////////////////////
// const { pbkdf2 } = require('crypto');
//
// const Text = 'tibia';
// const salt = 'elo';
// pbkdf2(Text, salt, 1000000, 64, 'sha512', (err, drivedKey) => {
//   if (err) throw err;
//
//   console.log(drivedKey.toString('hex'));
// });

const { hash, compare } = require('bcrypt');

const haslo = process.argv[2];
// eslint-disable-next-line no-shadow
hash(haslo, 10, (err, hash) => {
  if (err) {
    console.log(err);
  } else {
    console.log('hash:', hash);
    // eslint-disable-next-line no-shadow
    compare(haslo, hash, (err, res) => {
      console.log('haslo', haslo);
      if (res) {
        // password match
        console.log(res);
        console.log('logged in!');
      } else {
        // password doesnt match
        console.log('Nope!');
      }
    });
  }
});
