const { createReadStream, createWriteStream } = require('fs');
const { pipeline } = require('stream').promises;
const { createGunzip } = require('zlib');

(async () => {
  try {
    await pipeline(

      createReadStream('sadrafon.jpg'),
      createGunzip(),
      createWriteStream('unziprafon.jpg'),
    );
  } catch (err) {
    console.log(err);
  }

  console.log('Done!');
})();
