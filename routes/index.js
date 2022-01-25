const express = require('express')
const {heroValidator} = require('../middlewares/validators/heroValidator')
const {loginValidator,registerValidator } = require('../middlewares/validators/authValidator')
const router = express.Router()
const {catchErrors} = require('../middlewares/handlers/errorHandler')
const {addHero,putHero,deleteHero,getById,getAll} = require('./hero')
const {register,login} = require('./auth')

router.post('/api/hero',heroValidator,catchErrors(addHero))
router.put('/api/hero/:id', heroValidator,catchErrors(putHero))
router.delete('/api/hero/:id',catchErrors(deleteHero))
router.get('/api/hero',catchErrors(getAll))
router.get('/api/hero/:id',catchErrors(getById))

router.post('/api/auth/login',loginValidator,catchErrors(login))
router.post('/api/auth/register',registerValidator,catchErrors(register))
module.exports = router; 