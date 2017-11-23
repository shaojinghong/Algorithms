const EventEmitter = require('events');

class myEventEmitter extends EventEmitter{}

const mE = new myEventEmitter();

mE.on('test', () => {
    console.log('this is a test');
})
setInterval(() => {
    mE.emit('test');
}, 500);