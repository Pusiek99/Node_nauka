const { watch } = require('chokidar');
const { readFile } = require('fs').promises;

// C:\Users\HARDPC\Desktop\**\*.js
const userPath = process.argv[2];

async function showAddedFile(userPath) {
  const data = (await readFile(userPath, 'utf8'));
  console.log(`File ${userPath} has been added: `);
  console.log(data);
}

watch(userPath, {
  ignoreInitial: true,
  awaitWriteFinish: true,
}).on('add', (userPath) => showAddedFile(userPath))
  .on('change', (userPath) => console.log(`File ${userPath} has been changed`))
  .on('unlink', (userPath) => console.log(`File ${userPath} has been removed`));
