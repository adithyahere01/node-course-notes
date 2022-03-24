const eventEmitter = require('events')

const customEmitter = new eventEmitter()

customEmitter.on('event', (name, id)  => {
    console.log(`Event has been emitted ${name} ${id}`)
})

customEmitter.emit('event', 'Adithya', 3)