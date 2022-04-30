//require the connection to database
const { required } = require('nodemon/lib/config')
const mongoose = require('../db/connection')

//setup user profile schema
const StreamSchema = new mongoose.Schema(
    {
        title:{
            type:String,
        },
        description:{
            type:String,
        },
        comment:[
            {
                type:mongoose.Schema.Types.ObjectId, ref:'Comment'
            }
        ]
    },{
        timestamps: true
        
    })  

const Stream = mongoose.model('Stream', StreamSchema)

//exports model
module.exports = Stream