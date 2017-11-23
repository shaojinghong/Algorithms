const EventEmitter = require('events');

class CustomEvent extends EventEmitter {};

const ce = new CustomEvent();

ce.once('test', () => {
    console.log('this is a test');
})
// 虽然设定0.5s执行一次时间触发，但是，只触发一次
setInterval(() => {
    ce.emit('test');
}, 500);  