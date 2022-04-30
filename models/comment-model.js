//require the connection to database
const { required } = require('nodemon/lib/config')
const mongoose = require('../db/connection')

//setup user profile schema
const CommentsSchema = new mongoose.Schema(
    {
        name:{
            type: String,
        },
        comment:{
            type: String,
        },
        // stream:{
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: 'Stream'
        // }
    
    },{
        timestamps: true
    })
    

const Comment = mongoose.model('Comment', CommentsSchema)

//exports model
module.exports = Comment