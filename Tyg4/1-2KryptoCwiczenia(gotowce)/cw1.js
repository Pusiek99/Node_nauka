const { compare } = require('bcrypt');

const passwd = '$2b$10$nzcqdivHdzDekNIdsogICeKYICCumuM2q11Rc1r3E9JJegm66.96a';
const inputpasswd = process.argv[2];

compare(inputpasswd, passwd, (err, res) => {
  if (res) {
    // password match
    console.log('logged in!');
  } else {
    // password doesnt match
    console.log('Nope!');
  }
});
