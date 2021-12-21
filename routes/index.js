const express = require('express')
const router = express.Router()
const {addHero} = require('./hero')

router.post('/api/hero', addHero)