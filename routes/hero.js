const heroService = require('../services/heroService')
const { StatusCodes} = require('http-status-codes')


module.exports = async function addHero(request, response){
    const {name, surnames, password, email} =  request.body;
    let hero = {name, surnames, password, email};
    hero = await heroService.addHero(hero)    
    response.status(StatusCodes.OK).send(json(hero))
}

module.exports = async function putHero(request, response){
    const {name, surnames, password, email} =  request.body;
    let hero = {name, surnames, password, email};
    hero =  await heroService.updateHero(hero)
    response.status(StatusCodes.OK).send(json(hero))
}


module.exports = async function deleteHero(request, response){
    const {id} =  request.body;    
    let hero = await heroService.deleteHero(id)
    response.status(StatusCodes.OK).send(json(hero))
}


module.exports = async function getById(request, response){
    const {id} =  request.body;    
    const hero = await heroService.getById(id)
    response.status(StatusCodes.OK).send(json(hero))
}

module.exports = async function getAll(request, response){    
    const heroes = await heroService.getAllHeroes()
    response.status(StatusCodes.OK).send(json(heroes))
}
