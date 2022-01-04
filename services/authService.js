const User = require('../models/userModel')


module.exports.getUserLogin = (email, password) =>{
    return User.findOne({email: email, password: password}).then(user=> user !== isNaN(user) ? user : null
    )
}