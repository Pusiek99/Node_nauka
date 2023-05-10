const { readdir } = require('fs').promises;

async function readFilesAndDirectories() {
  const list = await readdir('.');
  console.log(list);
}

readFilesAndDirectories();
