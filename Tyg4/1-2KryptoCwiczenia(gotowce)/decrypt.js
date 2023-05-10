const { readFile, writeFile } = require('fs').promises;
const { compareSync } = require('bcrypt');
const { decryptText, hashing } = require('./cipherFunctions');
const { salt, FILE_NAME, pwd } = require('./constans');

(async () => {
  try {
    const FileText = JSON.parse(await readFile(FILE_NAME, 'utf8'));
    const decipheredMessage = await decryptText(FileText.encrypted, pwd, salt, FileText.iv);
    const decipheredHash = hashing(decipheredMessage);
    if (compareSync(decipheredMessage, decipheredHash)) {
      await writeFile(FILE_NAME, decipheredMessage, 'utf8');
      console.log('File has deciphered successfully.');
    } else {
      console.log("chksum isn't correct");
    }
  } catch (error) {
    console.error('Oh no!', error);
  }
})();
