/*FS Module - to interact with file system
                  =asynchronous methods(non-blocking)
                  =synchronous methods(blocking)
*/

const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./testtext.txt','utf8')


//write file = writeFileSync() method

//SYNCHRONOUS METHOD
writeFileSync('./adithya.txt', `this is result of ${first}  `, {flag:'a'}) //flag will append the text to the file
