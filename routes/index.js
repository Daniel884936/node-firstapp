const express = require('express')
const heroValidator = require('../middlewares/validators/heroValidator')
const router = express.Router()
const {addHero,putHero,deleteHero,getById,getAll} = require('./hero')

router.post('/api/hero', addHero)
router.put('/api/hero', putHero)
router.delete('/api/hero', deleteHero)
router.get('/api/hero/:id', getById)
router.get('/api/hero', getAll)


exports.module = router; 