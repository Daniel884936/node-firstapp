const Hero = require('../models/heroModel')


module.exports =  async function addHero(hero){
   try{
    const heroModel = new Hero({
        ...hero
    })
    return await heroModel.save();
   }catch(error){
       console.error(error)
   }
   return null;   
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

module.exports = async function deleteHero(id){
    try{
        await Hero.deleteOne({_id: id})           
    }catch(error){
        console.error(error)  
        return false      
    }    
    return true;
}

module.exports = async function updateHero(hero){    
    try{
        return await Hero.findOneAndUpdate({_id: hero.id},hero,{new:true}).populate("user",{
            _id:1
        })        
    }catch(error){
        console.error(error)
    }
    return null;
}


