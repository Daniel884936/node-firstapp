const heroService = require('../services/authService')
const { StatusCodes} = require('http-status-codes')


module.exports.login = (request, response)=>{
    const {email, password} = request.body;
    const userLogin = heroService.getUserByCredentials(email, password);
    if(!userLogin){
        return response.status(StatusCodes.NOT_FOUND).json()
    }
    return response.json(userLogin)
}

module.exports.register = (request, response)=>{
    const {name,password,surnames,email,heroes} = request.body;
    const user = {name,password,surnames,email,heroes}
    const userRegistered = await heroService.register(user) 
    return response.json(userRegistered)
}