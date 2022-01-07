const mongoose = require('mongoose')

const {Schema} = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },    
    password: {
        type: String,
        required: true
    }, 
    surnames: {
        type: String,
        required: true
    }, 
    email:{
        type: String,
        required: true,
        unique:true
    },
    active:{
        type: Boolean,
        required: true,
        default: true
    },
    heroes:[String]
})


userSchema.pre('remove', async function(next){
    await mongoose.model('Hero').deleteMany({heroes: this._id})
    next();
})


module.exports = mongoose.model('User', userSchema)
