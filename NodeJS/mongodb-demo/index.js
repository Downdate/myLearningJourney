const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('connected to mongodb...') )
    .catch(err => console.error('Could not connect to mongodb...',err))

