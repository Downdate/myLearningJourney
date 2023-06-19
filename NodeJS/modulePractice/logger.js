const EventEmitter  = require('events')
class Logger extends EventEmitter{
    i = 1
    log(message) {
        console.log(message)
        this.emit('messageLogged', `id : ${this.i}`)
        this.i ++
    }
}



module.exports = Logger