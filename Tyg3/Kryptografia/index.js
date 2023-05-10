const { encryptText, decryptText } = require('./cipherFunctions');

const salt = 'tibia';

(async () => {
  const encrypted = await encryptText(
    'Zażółć geslą jaźń',
    'mega haslo',
    salt,
  );
  console.log(encrypted);

  const decrypted = await decryptText(encrypted.encrypted, 'mega haslo', salt, encrypted.iv);
  // console.log(decrypted);
})();
