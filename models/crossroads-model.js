//require the connection to database
const mongoose = require('../db/connection')

//setup user profile schema
const ProfilesSchema = new mongoose.Schema(
    {
        username: {
            type: String
        },
        name: {
            type: String
        },
        dob: {
            type: String
        },
        location: {
            type: String
        },
        aboutMe: {
            type: String
        },
        profilePicUrl: {
            type: String
        }
    },
    {timestamps: true}
)

const Profiles = mongoose.model('Profiles', ProfilesSchema)

//exports model
module.exports = Profiles