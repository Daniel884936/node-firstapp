const Joi = require('joi')
const { StatusCodes} = require('http-status-codes')

module.exports = async function heroValidator(fn){
    return function(request, response, next){
        
        const schema  = Joi.object({
         name: Joi.string().required(),
         userId: Joi.string().required()
        })
        const hero = request.body;
        const {error} = schema.validate(hero)
        if(!error){
            fn(request, response).catch(error=>{
                console.log(error)
            })
            next()
        }
        response.StatusCodes(StatusCodes.BAD_REQUEST).send(json(error));
    }
}