// const { createReadStream, createWriteStream } = require('fs');
// const { pipeline } = require('stream').promises;
//
// (async () => {
//   try {
//     await pipeline(
//
//       createReadStream('sadrafon.jpg'),
//       createWriteStream('rafon.jpg'),
//     );
//   } catch (err) {
//     console.log(err);
//   }
//
//   console.log('Done!');
// });

const { createReadStream, createWriteStream } = require('fs');

const r = createReadStream('sadrafon.jpg');
const w = createWriteStream('rafon2.jpg');

r.pipe(w);

r.on('end', () => { console.log('Done!'); });
