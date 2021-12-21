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
    }
})

module.exports = mongoose.model('Hero', heroSchema);

