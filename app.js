const express = require('express')
require('./database')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))
app.use(require('./routes/index'))

module.exports = app;
require('./server')