const { createReadStream, createWriteStream } = require('fs');
const { pipeline } = require('stream').promises;
const { createGzip } = require('zlib');

(async () => {
  try {
    await pipeline(
      createReadStream('rafon2.jpg'),
      createGzip(),
      createWriteStream('sadrafon.jpg'),
    );
  } catch (err) {
    console.log(err);
  }

  console.log('Done!');
})();
