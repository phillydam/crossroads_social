//require the connection to database
const { required } = require('nodemon/lib/config')
const mongoose = require('../db/connection')

//setup user profile schema
const ProfilesSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        dob: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        aboutMe: {
            type: String,
            required: true
        },
        profilePicUrl: {
            type: String,
            required: false
        }
    },
    {timestamps: true}
)

const Profile = mongoose.model('Profile', ProfilesSchema)

//exports model
module.exports = Profile