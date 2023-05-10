const { stat, readdir } = require('fs').promises;

async function showFilesInDirectory(path) {
  const files = await readdir(path);
  for (const file of files) {
    const isDirectory = (await stat(`${path}/${file}`)).isDirectory();
    if (isDirectory) {
      console.log('folder', file);
      await showFilesInDirectory(`${path}/${file}`);
    } else {
      console.log('file', file);
    }
  }
}

showFilesInDirectory('.');
