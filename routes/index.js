const express = require('express')
const {heroValidator} = require('../middlewares/validators/heroValidator')
const router = express.Router()
const {catchErrors} = require('../middlewares/handlers/errorHandler')
const {addHero,putHero,deleteHero,getById,getAll} = require('./hero')

router.post('/api/hero', catchErrors(heroValidator(addHero)))
router.put('/api/hero', catchErrors(heroValidator(putHero)))
router.delete('/api/hero',catchErrors(deleteHero))
router.get('/api/hero/:id', catchErrors(getById))
router.get('/api/hero', catchErrors(getAll))
module.exports = router; 