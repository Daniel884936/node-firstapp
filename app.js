const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    res.send('Hello world')
    console.log('Hello world')
})

app.listen(3000)