const { StatusCodes} = require('http-status-codes')

const buildServiceResult = ( data, erros, status) =>{
    return{data, erros, status}
}

module.exports.success = (data) =>{
    return buildServiceResult(data,[],StatusCodes.OK)
}

module.exports.notFound = (data,errors = []) =>{
    return buildServiceResult(data,errors,StatusCodes.NOT_FOUND)
}

module.exports.internalError = (data,errors = []) =>{
    return buildServiceResult(data,errors,StatusCodes.INTERNAL_SERVER_ERROR)
}

module.exports.conflict = (data,errors = []) =>{
    return buildServiceResult(data,errors,StatusCodes.CONFLICT)
}