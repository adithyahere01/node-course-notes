const { createReadStream } = require('fs')

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
const stream = createReadStream('../bigfile.txt', { encoding: 'utf8' })
// const stream = createReadStream('../create-big-file.js')

stream.on('data', (result) => {
  console.log(result)
})
stream.on('error', (err) => console.log(err))