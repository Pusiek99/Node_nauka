const { promisify } = require('util');
const scrypt = promisify(require('crypto').scrypt);
const randomBytes = promisify(require('crypto').randomBytes);
const { createCipheriv } = require('crypto');

const algorithm = 'aes-192-cbc'; // AES 192
const password = 'Password used to generate key';
(async () => {
  // First, we'll generate the key. The key length is dependent on the algorithm.
  // in this case, for aes192, it's 24 bytes (192 bits).
  const key = await scrypt(password, 'salt', 24);
  const iv = await randomBytes(16);

  const cipher = createCipheriv(algorithm, key, iv);
  const encrypted = cipher.update('Tibia', 'utf8', 'hex');

  console.log({
    encrypted,
    iv: iv.toString(('hex')),
  });
})();
