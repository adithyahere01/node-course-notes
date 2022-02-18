//MODULES

//CommonJS = every file is a module by default
//Modules = separate files, encapsulated code (only share minimum)
const names = require('./namesModule.js') //can destrcutre {john, peter}
const sayHi = require('./utils.js')
const alternative = require('./alternative-syntax.js')

console.log(alternative);
sayHi('Adithya')
sayHi(names.john)
sayHi(names.peter)