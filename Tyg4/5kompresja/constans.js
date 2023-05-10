const salt = 'tibia';
const FILE_NAME = process.argv[2].toString();
const destination = process.argv[3].toString();
const pwd = process.argv[4];
const ENCRYPTION_SALT = ' AOUHDA(&SDYNAS)*&DTAS)*&DTB *&ASTBD*&AS&*B D*&TAB S&*DBT A*STB D*&AS& TD)*&ASTB *&DTB)'
    + ' A&STB D)*&B^D) ';
module.exports = {
  salt,
  FILE_NAME,
  destination,
  pwd,
  ENCRYPTION_SALT,
};
