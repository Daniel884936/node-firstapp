const Joi = require('joi')
const { StatusCodes} = require('http-status-codes')

module.exports.heroValidator = (fn) =>{
    return function(request, response, next){
        
        const schema  = Joi.object({
         name: Joi.string().alphanum().required(),
         userId: Joi.string().alphanum().required()
        })        
        console.log(request.body)
        const hero = request.body;
        const {error} = schema.validate(hero)
        if(!error){
            return fn(request, response)            
        }
        console.log(error)
        response.status(StatusCodes.BAD_REQUEST).json(error);        
    }
}
