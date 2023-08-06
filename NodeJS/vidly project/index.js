const express = require('express')
const app     = express()
const Joi     = require('joi')
const debug   = require('debug')('app:')
const Morgan  = require('morgan')
const config  = require('config')
const genres  = require('./routes/genres')
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/vidly")
    .then(()=> console.log("connected to mongodb..."))
    .catch((err)=> console.log("couldn't connect to mongodb",err.message))

app.use(express.json())
app.use('/api/genres', genres)

//Configuration
debug(`Application name: ${config.get('name')}`)
debug(`Application mail: ${config.get('mail.host')}`)
debug(`Application password: ${config.get('mail.password')}`)

//checking environment state for morgan
if (app.get('env') === 'development'){
    app.use(Morgan('tiny'))
    // startup debugger
    debug(`morgan enabled ....`)
}


const port = process.env.PORT || 4000

app.listen(port,()=> debug(`listening on port ${port} .....`))





