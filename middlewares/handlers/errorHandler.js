const { StatusCodes} = require('http-status-codes')


module.exports.catchErrors = (fn)=>{
    return function(request,response){
        return fn(request,response).catch(error=>{
            console.error(error.message)
            return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error.message)                            
        })
    }
}