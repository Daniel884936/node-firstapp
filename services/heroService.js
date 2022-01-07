const Hero = require('../models/heroModel')


module.exports.addHero =  (hero) =>{
     const heroModel = new Hero({
         ...hero
     })
     return heroModel.save().then(dbHero=> dbHero !== isNaN(dbHero) ? dbHero : null)
 }


module.exports.getAllHeroes = ()=>{    
    return Hero.find().then(heroes => heroes !== isNaN(heroes) ? heroes : [])  
}


module.exports.getByIdHero =  (id) =>{    
    return  Hero.findById(id).then(hero => hero !== isNaN(hero) ? hero : null)    
}


module.exports.deleteHero = (id) =>{
    return Hero.deleteOne({_id: id})
}


module.exports.updateHero = (hero) => {    
    return Hero.findOneAndUpdate({_id: hero.id},hero,{new:true}).populate("user",{
        _id:1
    }).then(dbHero=> dbHero !== isNaN(dbHero) ? dbHero : null)
}


