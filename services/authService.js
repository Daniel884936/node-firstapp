const User = require('../models/userModel')


module.exports.getUserByCredentials = (email, password) =>{
    return User.findOne({email: email, password: password}).then(user=> user !== isNaN(user) ? user : null
    )
}

module.exports.register = (user) =>{
    const userModel = new User({
        ...user
    })
    return userModel.save().then(userFromDb =>{ 
        return {
        name: userFromDb.name,
        surnames: userFromDb.surnames,
        email: userFromDb.email
    }})
}