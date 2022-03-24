const { readFile } = require('fs')

console.log('starting a reading')

//file
readFile('./text.txt', 'utf8', (err,result)=>{
    if(err){
        return console.log(err)
    }
    console.log(result)
    console.log('finished reading')
})

console.log('starting a new text')

// Output
// starting a reading
// starting a new text
// ---text---
// finished reading