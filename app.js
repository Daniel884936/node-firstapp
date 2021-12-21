const express = require('express')
require('./database')

const app = express()

app.get('/', (req, res)=>{
    res.send('Hello world')
    console.log('Hello world')
})

app.listen(3000)