const { mkdir } = require('fs').promises;

(async () => {
  await mkdir('./testMkdir', {
    recursive: true,
  });
})();
