const { watch } = require('chokidar');

watch('.', { ignoreInitial: true })
  .on('add', (path) => console.log(`File ${path} has been added`))
  .on('change', (path) => console.log(`File ${path} has been changed`))
  .on('unlink', (path) => console.log(`File ${path} has been removed`))
  .on('addDir', (path) => console.log(`Directory ${path} has been added`))
  .on('unlinkDir', (path) => console.log(`Directory ${path} has been removed`));
