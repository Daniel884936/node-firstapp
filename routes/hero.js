const heroService = require('../services/heroService')

module.exports.addHero = async (request, response) =>{    
    const {name, description, age, hability,user} =  request.body;
    let hero = {name, description, age, hability,user};
    console.log(hero)         
    hero = await heroService.addHero(hero)    
    console.log(hero)
    response.json(hero)
}

module.exports.putHero = async  (request, response)=>{

    const {name, description, age, hability,user} =  request.body;
    let hero = {name, description, age, hability,user};
    hero =  await heroService.updateHero(hero)
    response.json(hero)          
}


module.exports.deleteHero = async  (request, response) =>{
    const {id} =  req.params;    
    let hero = await heroService.deleteHero(id)
    response.json(hero)        
}


module.exports.getById = async (request, response)=>{    
    const {id} =  request.params;    
    const hero = await heroService.getByIdHero(id)
    response.json(hero)
}

module.exports.getAll = async (request, response) =>{     
    const heroes = await heroService.getAllHeroes()            
    response.json(heroes)    
}
