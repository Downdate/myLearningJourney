const startupDebugger   = require('debug')('app:startup')
const dbDebugger   = require('debug')('app:db')
const debug   = require('debug')('app:')
const Config  = require('config')
const express = require('express')
const Morgan  = require('morgan')
const courses = require('./routes/courses')
const homePage= require('./routes/homePage')


const  app = express()

// setting view engine for our app
app.set('view engine','pug')

app.use(express.json())
app.use('/api/courses', courses)
app.use('/',homePage)


const port = process.env.PORT || 3000
app.listen(port, () => console.log(` Listening on port ${port} `))


//Configuration
debug(`Application name: ${Config.get('name')}`)
debug(`Application mail: ${Config.get('mail.host')}`)
debug(`Application password: ${Config.get('mail.password')}`)

debug(`app: ${app.get('env')} `)

if (app.get('env') === 'development'){
    app.use(Morgan('tiny'))
    // startup debugger
    startupDebugger(`morgan enabled ....`)
}

// using db debugger
dbDebugger(`connected to the database .....`)