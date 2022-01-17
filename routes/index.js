const express = require('express')
const {heroValidator} = require('../middlewares/validators/heroValidator')
const router = express.Router()
const {catchErrors} = require('../middlewares/handlers/errorHandler')
const {addHero,putHero,deleteHero,getById,getAll} = require('./hero')

router.post('/api/hero',heroValidator,catchErrors(addHero))
router.put('/api/hero', heroValidator,catchErrors(putHero))
router.delete('/api/hero',catchErrors(deleteHero))
router.get('/api/hero',catchErrors(getAll))
router.get('/api/hero/:id',catchErrors(getById))
module.exports = router; 