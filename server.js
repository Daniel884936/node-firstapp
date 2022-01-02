const express = require('express')
const config = require('config');

const PORT = config.get('port');
const app = express();

app.listen(PORT,()=>{
    console.info(`Listen in port: ${PORT}`)
})
