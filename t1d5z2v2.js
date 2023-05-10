const { readdir, stat } = require('fs').promises;

async function readFilesAndDirectories() {
  const fileNames = await readdir('./tyg1', {
    withFileTypes: true,
  });
    // eslint-disable-next-line no-restricted-syntax
  for (const fileName of fileNames) {
    console.log(fileName.name);

    const fileStat = await stat(`./${fileName.name}`);
    console.log(fileStat.isFile());
  }
}

// async function readFilesAndDirectories() {
//   const fileNames = await readdir('.');
//   console.log(fileNames);
// }
readFilesAndDirectories();
