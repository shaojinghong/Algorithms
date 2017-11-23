const stringDecoder = require('string_decoder').StringDecoder;
const decoder = new stringDecoder('utf8');

const buf = Buffer.from('中文字符串!');

/*
中��
�字�
��串
!م
*/
for (let i = 0; i < buf.length; i += 5){
    const temBuf = Buffer.allocUnsafe(5);
    buf.copy(temBuf, 0, i); 
    console.log(temBuf.toString());
}


/*
中
文字
符串
!
*/
for (let i = 0; i < buf.length; i += 5){
    const temBuf = Buffer.allocUnsafe(5);
    buf.copy(temBuf, 0, i); 
    console.log(decoder.write(temBuf));
}