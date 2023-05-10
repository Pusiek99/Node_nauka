const { exec } = require('child_process');

const cp = exec('dir', {
  /* env: {
    PATH: 'D:\\',
  }, */
  // cwd: 'C:\\',
  // timeout: 1000, // maksymalny czas trwania tego cp
}); // cp to ChildProcess

cp.on('close', () => {
  console.log('Finished!');
});
