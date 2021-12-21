const Hero = require('../models/heroModel')


module.exports =  async function addHero(hero){
   try{
    const heroModel = new Hero({
        ...hero
    })
    await heroModel.save();
   }catch(error){
       console.error(error)
   }   
}


module.exports = async function getAllHeroes(){
    try{
        return await Hero.find();
    }catch(error){
        console.error(error)
    }
    return []
}

module.exports = async function getById(id){
    try{
        return await Hero.findById(id)
    }catch(error){
        console.error(error)
    }
    return null;
}

module.exports = async function deleteHero(){
    try{
        await Hero.deleteOne()        
    }catch(error){
        console.error(error)
        return false;
    }    
    return true;
}


