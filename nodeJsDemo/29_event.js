const EventEmitter = require('events');

class CustomEvent extends EventEmitter {}

const ce = new CustomEvent();

ce.on('error', (err, time) => {
    console.log(err);
    console.log(time);
});

ce.emit('error', new Error('jinghong'), Date.now()); // 触发事件，并传入参数
