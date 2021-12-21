const express = require('express')
const User = require('./models/userModel')
require('./database')

const app = express()

app.get('/', async (req, res)=>{
    res.send('Hello world')
    console.log('Hello world')
})

app.listen(3000);