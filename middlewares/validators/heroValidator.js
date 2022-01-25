const Joi = require('joi')
const {validate} = require('./validator')

module.exports.heroValidator = (request, response, next) =>{    
    const schema  = Joi.object({
        name: Joi.string().required(),
        description: Joi.string().required()
    })        
    validate(schema,request, response, next)
}

