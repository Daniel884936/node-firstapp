const express = require('express')
const config = require('congif');

const PORT = config.get('port');
const app = express();

app.listen(PORT,()=>{
    console.log(`Listen in port: ${PORT}`)
})
