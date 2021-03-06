const User = require('../models/userModel')
const {success,conflict} = require('../service-result/serviceResult')


module.exports.getUserByCredentials = (email, password) =>{
    return User.findOne({email: email, password: password}).then(success)
}

module.exports.register = async (user) =>{
    const userModel = new User({
        ...user
    })
    const userExist  = await User.findOne({email: user.email})
    if(userExist){
        return Promise.resolve(conflict(null,['User already exist!']))
    }
    return userModel.save().then(success)
}