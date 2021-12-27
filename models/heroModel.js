const mongoose = require('mongoose');

const {Schema} = mongoose;

const heroSchema = new Schema({
    name: {
        type:String,
        required: true
    },
    description: String,
    age: Number,
    hability: String,
    user:{
        ref: 'User',
        type: mongoose.Schema.Types.ObjectID
    },
    active:{
        type: Boolean,
        default: true , 
        required: true 
    }
})

module.exports =  mongoose.model('Hero', heroSchema);

/* const Hero  = mongoose.model('Hero', heroSchema);

async function saveHero(){
    const hero  = new Hero({
        name: 'Daniel', 
        description:'nasda',
        age:21
    })

    await hero.save()
}

saveHero(); */

