const { readFile, writeFile } = require('fs').promises;
const { encryptText, hashing } = require('./cipherFunctions');
const { salt, FILE_NAME, pwd } = require('./constans');

(async () => {
  try {
    const FileText = (await readFile(FILE_NAME, 'utf8'));
    const theHash = hashing(FileText);
    const dataToCipher = await encryptText(FileText, pwd, salt);
    dataToCipher.hash = theHash;
    await writeFile(FILE_NAME, JSON.stringify(dataToCipher), 'utf8');
    console.log('File has ciphered successfully.');
  } catch (error) {
    console.log('Oh no!', error);
  }
})();
