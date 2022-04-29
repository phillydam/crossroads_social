//require the connection to database
const { required } = require('nodemon/lib/config')
const mongoose = require('../db/connection')

//setup user profile schema
const LoginSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    },
    {timestamps: true}
)

const Login = mongoose.model('Login', LoginSchema)

//exports model
module.exports = Login