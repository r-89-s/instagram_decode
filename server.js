const express = require('express')
const logger = require('morgan')
const app = express()

app.use(logger('dev'))
app.use(express.urlencoded())
app.use(express.json())

app.get('/', (req, res)=> {
    res.send('ok')
})

app.post('/api/:key', (req, res)=>{
    console.log(req.query)
    console.log(req.body)
    console.log(req.params)
    res.status(200).send('Post /api works')
})

app.listen(3000, ()=>{
    console.log("Server is listening on port 3000")
})