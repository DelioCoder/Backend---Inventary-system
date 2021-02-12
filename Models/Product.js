const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    type:{
        type: String,
        required: true,
        trim: true
    },
    brand:{
        type: String,
        required: true,
        trim: true
    },
    description:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
        trim: true
    },
    stock:{
        type: Number,
        required: true,
        trim: true
    }
},{  timestamps: true });

module.exports = model('Product', productSchema);
