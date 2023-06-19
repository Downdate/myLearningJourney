const Logger = require('../modulePractice/logger')
const logger = new Logger()


// Register a listener
logger.on('start',function (){
    console.log("log has been started, Good job")
})


// Raise an event
logger.emit('start')

// Waits for the message to be printed then logs the ID of the message
logger.on('messageLogged', (arg) => {
    console.log("message Logged => ",arg)
})

// Log 10 messages
for (let i = 1; i <10 ; i++) {
    logger.log(`message number ${i}`)
}



