const EventEmitter = require('events');

class customEvent extends EventEmitter{}

const ce = new customEvent();

function fn1(){
   console.log('this is fn1');
}
function fn2(){
   console.log('this is fn2');
}
ce.on('test', fn1);
ce.on('test', fn2);

setInterval(() => {
   ce.emit('test');
}, 500);
setInterval(() => {
   ce.removeListener('test', fn2)
   ce.removeListener('test', fn1);
}, 1500);