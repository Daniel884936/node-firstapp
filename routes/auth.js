const heroService = require('../services/authService')
const { StatusCodes} = require('http-status-codes')
const {buildApiResult} = require('../api-result/apiResult')
const {userMap} = require('../mappers/objectMappers')
const objectMapper = require('object-mapper')



module.exports.login = async (request, response)=>{
    const {email, password} = request.body;
    const result = await heroService.getUserByCredentials(email, password);
    const {data} = result
    if(!data){
        return response.status(StatusCodes.NOT_FOUND)
                .json(buildApiResult(data,StatusCodes.NOT_FOUND))
    }
    const userDTO = objectMapper(data,userMap)
    return response.json(buildApiResult(userDTO,StatusCodes.OK))
}


module.exports.register = async (request, response)=>{
    const {name,password,surnames,email,heroes} = request.body;
    const user = {name,password,surnames,email,heroes}
    const result = await heroService.register(user) 
    const {data} = result
    if(result.status === StatusCodes.CONFLICT){
        return response.status(StatusCodes.CONFLICT)
                .json(buildApiResult(data,StatusCodes.CONFLICT,result.errors))
    }
    const userDTO = objectMapper(data,userMap)
    return response.json(buildApiResult(userDTO,StatusCodes.OK))
}