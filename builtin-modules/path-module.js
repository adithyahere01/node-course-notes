//**PATH Module - to interact with file paths */
const path = require('path')

//join method
const filepath = path.join('/Users/', 'adithya', 'Desktop', 'file.txt')
//**** OutPut: /Users/sahil/Desktop/file.txt

//basename methid
const base = path.basename(filepath)
//**** OutPut: file.txt

//resolve method
const absolutePath = path.resolve(__dirname, 'builtin-modules', 'path-module.js')
console.log(absolutePath);