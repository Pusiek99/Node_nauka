const { exec } = require('child_process');

exec('node test.js', (error, stdout, stderr) => {
  console.log('Oh no!', error);

  console.log('Error in app!:', stderr);

  console.log('Program has finished!:', stdout);
});
