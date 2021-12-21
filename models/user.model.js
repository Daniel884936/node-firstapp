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
    status:{
        type: Boolean,
        required: true,
        default: true
    },
    users:[
        {
            userId: String,
            name: String,
            surnames: String         
        }
    ]
})

userSchema.pre('remove', async function(next){
    await mongoose.model('Hero').deleteMany({user: this._id})
    next();
})


//TODO
const User = mongoose.model('User', userSchema)

async function createUser(){
    const user = new User({
        name:'Daniel',
        surnames:'Tejada Montero',
        password:'123456',
        email :'rejadadaniel@gmial.com'
})

console.log('asdadasdasd')
const result = await user.save();
console.log(result)
}

createUser();

