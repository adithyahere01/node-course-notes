//***OS Module - Provides many usefull properties for interacting with the Operating System as well as Server.

const os = require('os')

//info about current user
let user = os.userInfo()

//method returns the system uptime in seconds
console.log(`${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
}
console.log(currentOS)