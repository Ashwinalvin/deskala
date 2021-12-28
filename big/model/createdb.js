const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const human = new Schema(
    {
        Name: {
            type: String,
            required: true
        },
        DOB: {
            type: String,
            required: true
        },
        Age: {
            type: Number,
            required: true
        },
        Address: {
            type: String,
            required: true
        },
        State: {
            type: String,
            required: true
        },
        Pincode: {
            type: String,
            required: true
        },
        id: {
            type: Number,
            required: true
        },

       
    }
);

module.exports = mongoose.model('createdb',human,'human_entry');