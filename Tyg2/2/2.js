const path = require('path');

function safeJoin(base, target) {
  const targetPath = `.${path.normalize(`/${target}`)}`;
  return path.resolve(base, targetPath);
}
// dla przykladu: node 2.js ../../../../../../../../../../Windows
const test = safeJoin(__dirname, process.argv[2]);

console.log('user path = ', test);

console.log('Ściezka: ', path.dirname(test));
console.log('nazwa pliku: ', path.basename(test));
console.log('rozszerzenie: ', path.extname(test));
