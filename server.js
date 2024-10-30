const express = require('express')
const logger = require('morgan')
const app = express()
const passport = require('passport')

app.use(logger('dev'))
app.use(express.urlencoded())
app.use(express.json())
app.use(passport.initialize())

require('./app/auth/passport')

app.use(require('./app/auth/routes'))
app.use(require('./app/post/routes'))

app.listen(3000, ()=>{
    console.log("Server is listening on port 3000")
})