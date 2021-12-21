const heroService = require('../services/heroService')
const { StatusCodes} = require('http-status-codes')


module.exports = async function addHero (request, response){
    const {name, surnames, password, email} =  request.body;
    const hero = {name, surnames, password, email};
    heroService.addHero(hero)    
    response.status(StatusCodes.OK).send(json(hero))
}