// const { EventEmitter } = require('events');
//
// function ticToc() {
//   const ee = new EventEmitter();
//
//   setInterval(() => {
//     ee.emit('tick', 'test');
//   }, 1000);
//
//   setInterval(() => {
//     ee.emit('5sec');
//   }, 5000);
//
//   return ee;
// }
//
// module.exports = {
//   ticToc,
// };
const { EventEmitter } = require('events');

class TicToc extends EventEmitter {
  constructor() {
    super();
    setInterval(() => {
      this.emit('tick', 'test');
    }, 1000);

    setInterval(() => {
      this.emit('5sec');
    }, 5000);
  }
}

module.exports = {
  TicToc,
};
