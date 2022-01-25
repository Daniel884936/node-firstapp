const Joi = require('joi')
const { StatusCodes} = require('http-status-codes')


module.exports.validate = (schema ,request, response, next) =>{            
    console.log(request.body)
    const data = request.body;
    const {error} = schema.validate(data)
    if(error){
        console.log(error)
        return response.status(StatusCodes.BAD_REQUEST).json(error);                    
    }            
    next()
}