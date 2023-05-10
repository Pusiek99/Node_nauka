const { promisify } = require('util');
const scrypt = promisify(require('crypto').scrypt);
const randomBytes = promisify(require('crypto').randomBytes);
const { createCipheriv, createDecipheriv } = require('crypto');

async function encryptText(text, password, salt) {
  const algorithm = 'aes-192-cbc'; // AES 192
  const key = await scrypt(password, salt, 24);
  const iv = await randomBytes(16);

  const cipher = createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');

  return {
    encrypted,
    iv: iv.toString('hex'),
  };
}

async function decryptText(text, password, salt, ivHex) {
  const algorithm = 'aes-192-cbc'; // AES 192

  const key = await scrypt(password, salt, 24); // 24 bo tyle uzywa aes192, salt to na szytwno doklejony jakiś
  // skomplikowany, długi tekst który jest doklejany do password.
  const iv = Buffer.from(ivHex, 'hex'); // initialization vector.

  const decipher = createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(text, 'hex', 'utf-8');
  decrypted += decipher.final('utf8');
  console.log(decrypted);
  return decrypted;
}

module.exports = {
  encryptText,
  decryptText,
};
