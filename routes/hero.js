const heroService = require('../services/heroService')
const {buildApiResult} = require('../api-result/apiResult')
const { StatusCodes} = require('http-status-codes')


module.exports.addHero = async (request, response) =>{    
    const {name, description, age, hability,user} =  request.body;
    let hero = {name, description, age, hability,user};
    console.log(hero)         
    const result = await heroService.addHero(hero)    
    console.log(result)
    return response.json(buildApiResult(result.data,result.status))
}

module.exports.putHero = async (request, response)=>{
    const {id} =  request.params;
    const {name, description, age, hability,user} =  request.body;
    let hero = {name, description, age, hability,user};
    const result = await heroService.updateHero(id,hero)

    if(result.status === StatusCodes.NOT_FOUND){
        return response.status(StatusCodes.NOT_FOUND)
                .json(buildApiResult(result.data,result.status))
    }
    console.log(result)
    return response.json(buildApiResult(true,result.status))          
}


module.exports.deleteHero = async (request, response) =>{
    const {id} =  request.params;    
    let result = await heroService.deleteHero(id)

    if(result.status === StatusCodes.NOT_FOUND){
        return response.status(StatusCodes.NOT_FOUND)
                .json(buildApiResult(result.data,result.status))
    }
    return response.json(result)        
}


module.exports.getById = async (request, response)=>{    
    const {id} =  request.params;    
    const result = await heroService.getByIdHero(id)
    return response.json(buildApiResult(result.data,result.status))
}

module.exports.getAll = async (request, response) =>{     
    const result = await heroService.getAllHeroes()            
    return response.json(buildApiResult(result.data,result.status))    
}
