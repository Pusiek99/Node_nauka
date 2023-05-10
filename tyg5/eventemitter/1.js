const { TicToc } = require('./tick-tock');

new TicToc()
  .once('tick', () => {
    console.log('JAEEDZIEMY PANOWIE!');
  })
  .on('tick', () => {
    console.log('tick');
  })
  .on('5sec', () => {
    console.log('5 ticks!');
  });
