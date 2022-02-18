const names = require('../modules/namesModule.js') //can destrcutre {john, peter}
const sayHi = require('../modules/utils.js')
const alternative = require('../modules/alternative-syntax.js')

console.log(alternative);
sayHi('Adithya')
sayHi(names.john)
sayHi(names.peter)