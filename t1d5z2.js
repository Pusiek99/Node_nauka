const { readdir, stat } = require('fs').promises;

async function readFilesAndDirectories(path) {
  const files = await readdir(path);

  for (const file of files) {
    const filesStat = await stat(`${path}/${file}`);
    if (filesStat.isDirectory()) {
      console.log('FOLDER:', file);
      await readFilesAndDirectories(`${path}/${file}`);
    } else {
      console.log('   ', file);
    }
  }
}
readFilesAndDirectories('.');
