const Joi = require('joi')
const { StatusCodes} = require('http-status-codes')

/* module.exports.heroValidator = (fn) =>{
    return function(request, response, next){
        
        const schema  = Joi.object({
         name: Joi.string().alphanum().required(),
         description: Joi.string().alphanum()
        })        
        console.log(request.body)
        const hero = request.body;
        const {error} = schema.validate(hero)
        if(!error){
            return fn(request, response)            
        }        
        console.log(error)
        response.status(StatusCodes.BAD_REQUEST).json(error);        
        next()
    }
} */

module.exports.heroValidator = (request, response, next) =>{    
    const schema  = Joi.object({
        name: Joi.string().alphanum().required(),
        description: Joi.string().alphanum()
    })        
    console.log(request.body)
    const hero = request.body;
    const {error} = schema.validate(hero)
    if(error){
        console.log(error)
        return response.status(StatusCodes.BAD_REQUEST).json(error);                    
    }            
    next()
}

