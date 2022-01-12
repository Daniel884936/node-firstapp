const Hero = require('../models/heroModel')


module.exports.addHero =  (hero) =>{
     const heroModel = new Hero({
         ...hero
     })
     return heroModel.save()
 }


module.exports.getAllHeroes = ()=>{    
    return Hero.find()
}


module.exports.getByIdHero =  (id) =>{    
    return  Hero.findById(id)   
}


module.exports.deleteHero = (id) =>{
    return Hero.deleteOne({_id: id})
}


module.exports.updateHero = (hero) => {    
    return Hero.findOneAndUpdate({_id: hero.id},hero,{new:true}).populate("user",{
        _id:1
    })
}


