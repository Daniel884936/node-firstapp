const { StatusCodes} = require('http-status-codes')


module.exports.catchErrors = (fn)=>{
    return function(request,response,next){
        return fn(request,response).catch(error=>{
            console.error(error.message)
            response.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error.message)            
        })
    }
}