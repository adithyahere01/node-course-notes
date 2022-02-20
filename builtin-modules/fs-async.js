const { readFile, writeFile } = require('fs')

readFile('./adithya.txt', 'utf8' , (err, result) => {
    if(err){
        console.log(err)
        return
    }
    const data = result
    //**get the buffer data so add utf8 or result.toString()

    readFile('./testtext.txt','utf8', (err, result) => {
        if(err){
            console.log(err)
            return
        }
        const data2 = result
        writeFile('./hello.txt', `Async method of writing file of ${data2 + data}  `, {flag:'a'}, (err) => {
            if(err){
                console.log(err)
                return
            }
            console.log('file written')
        })
    })
})