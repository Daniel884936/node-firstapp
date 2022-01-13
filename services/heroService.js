const Hero = require('../models/heroModel')
const {success,notFound} = require('../service-result/serviceResult')


module.exports.addHero =  (hero) =>{
     const heroModel = new Hero({
         ...hero
     })
     return heroModel.save().then(hero => success(hero))
 }


module.exports.getAllHeroes = ()=>{    
    return Hero.find().then(heroes => success(heroes))
}


module.exports.getByIdHero =  (id) =>{    
    return  Hero.findById(id).then(hero => success(hero))   
}


module.exports.deleteHero = (id) =>{
    return Hero.deleteOne({_id: id}).then(hero => {
        if(hero){
            return success(hero)
        }
        return notFound(hero,['Hero not found'])
    })   
}


module.exports.updateHero = (hero) => {    
    return Hero.findOneAndUpdate({_id: hero.id},hero,{new:true}).populate("user",{
        _id:1
    }).then(hero => {
        if(hero){
            return success(hero)
        }
        return notFound(hero,['Hero not found'])
    })
}


