const Joi = require('joi')
const {validate} = require('./validator')

module.exports.loginValidator = (request, response, next) =>{    
    const schema  = Joi.object({
        email: Joi.string().required(),
        password: Joi.string().required()
    })        
    validate(schema,request, response, next)
}

module.exports.registerValidator = (request, response, next) =>{    
    const schema  = Joi.object({
        email: Joi.string().required(),
        password: Joi.string().required(),
        surnames: Joi.string().required(),
        name: Joi.string().required()
    })        
    validate(schema,request, response, next)
}