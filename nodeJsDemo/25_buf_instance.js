/*
 * 实例方法
 */
const buf = Buffer.from('This is a test');
console.log(buf.length); // 14   这个长度和内容无关，只和地址长度有关
console.log(buf.toString('base64')); // 'VGhpcyBpcyBhIHRlc3Q=' 

const buf2 = Buffer.alloc(10);
console.log(buf2.length); // 10

const buf3 = Buffer.allocUnsafe(10);
buf3.fill(10,2,6); // 从第3到第6个填充10
console.log(buf3); // <Buffer 38 50 0a 0a 0a 0a 00 00 98 50>
