const { StatusCodes} = require('http-status-codes')

const buidlServiceResult = ( data, erros, status) =>{
    return{data, erros, status}
}

module.exports.success = (data) =>{
    return buidlServiceResult(data,[],StatusCodes.OK)
}

module.exports.notFound = (data,errors = []) =>{
    return buidlServiceResult(data,errors,StatusCodes.NOT_FOUND)
}

module.exports.internalError = (data,errors = []) =>{
    return buidlServiceResult(data,errors,StatusCodes.INTERNAL_SERVER_ERROR)
}

module.exports.conflict = (data,errors = []) =>{
    return buidlServiceResult(data,errors,StatusCodes.CONFLICT)
}