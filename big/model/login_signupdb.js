const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const login_sign = new Schema(
    {
        Email_id: {
            type: String,
            required: true
        },
        Phone_Number: {
            type: String,
            required: true
        },
        Password: {
            type: String,
            required: true
        }

       
    }
);

module.exports = mongoose.model('login_signupdb', login_sign,'login_signup');