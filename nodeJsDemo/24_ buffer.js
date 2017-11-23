
/**
 * Buffer类的方法
 */
console.log(Buffer.alloc(10));  // <Buffer 00 00 00 00 00 00 00 00 00 00>
console.log(Buffer.alloc(5, 1));// <Buffer 01 01 01 01 01>

console.log(Buffer.allocUnsafe(5)); // <Buffer 18 03 00 03 01>  数据是随机的

console.log(Buffer.from([1,2,3])); //  <Buffer 01 02 03>
console.log(Buffer.from('test'));  // <Buffer 74 65 73 74>
console.log(Buffer.from('test', 'base64')); // <Buffer b5 eb 2d

console.log(Buffer.byteLength('test'));  // 4
console.log(Buffer.byteLength('测试'));  // 6

console.log(Buffer.isBuffer(Buffer.from([1, 2, 3])));  // true判断是否是Buffer对象
console.log(Buffer.isBuffer({a: 1}));  // {a: 1} 是一个普通对象


const buf1 = Buffer.from('my ');
const buf2 = Buffer.from('name ');
const buf3 = Buffer.from('is ');
const buf4 = Buffer.from('jinghong');
const buf = Buffer.concat([buf1, buf2, buf3, buf4]); 
console.log(buf);  // <Buffer 6d 79 20 6e 61 6d 65 20 69 73 20 6a 69 6e 67 68 6f 6e 67>
console.log(buf.toString());  // 'my name is jinghong'



