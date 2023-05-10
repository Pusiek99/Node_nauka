const salt = 'tibia';
const FILE_NAME = process.argv[2].toString();
const pwd = process.argv[3];

module.exports = {
  salt,
  FILE_NAME,
  pwd,
};
