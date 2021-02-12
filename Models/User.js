const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    mail:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    cellphone:{
        type: Number,
        required: true,
        trim: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        trim: true
    },
    confirmPassword:{
        type: String,
        required: true,
        trim: true
    }
}, { timestamps: true } );

module.exports = model('User', userSchema);