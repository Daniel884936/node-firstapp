const heroService = require('../services/heroService')
const {buildApiResult} = require('../api-result/apiResult')
const { StatusCodes} = require('http-status-codes')
const {heroMap} = require('../mappers/objectMappers')
const objectMapper = require('object-mapper')


module.exports.addHero = async (request, response) =>{    
    const {name, description, age, hability,user} =  request.body;
    let hero = {name, description, age, hability,user};
    console.log(hero)         
    const result = await heroService.addHero(hero)    
    console.log(result)
    const {data} = result  
    const heroDTO =  objectMapper(data,heroMap)   
    return response.json(buildApiResult(heroDTO,result.status))
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
    const {data} = result  
    const heroDTO =  objectMapper(data,heroMap)   
    return response.json(buildApiResult(heroDTO,result.status))          
}


module.exports.deleteHero = async (request, response) =>{
    const {id} =  request.params;    
    let result = await heroService.deleteHero(id)

    if(result.status === StatusCodes.NOT_FOUND){
        return response.status(StatusCodes.NOT_FOUND)
                .json(buildApiResult(result.data,result.status))
    }
    const {data} = result  
    const heroDTO =  objectMapper(data,heroMap)   
    return response.json(buildApiResult(heroDTO,result.status))        
}


module.exports.getById = async (request, response)=>{    
    const {id} =  request.params;    
    const result = await heroService.getByIdHero(id)
    const {data} = result  
    const heroDTO =  objectMapper(data,heroMap)   
    return response.json(buildApiResult(heroDTO,result.status))
}

module.exports.getAll = async (request, response) =>{     
    const result = await heroService.getAllHeroes()            
    console.log(result)
    const {data} = result    
    const heroesDTO = data.map( value => objectMapper(value,heroMap))   
    return response.json(buildApiResult(heroesDTO,result.status))       
}
