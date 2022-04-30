//require model, which is connected to the database
const Comment = require('../models/comment-model')

const seedData = require('./comments-seeds.json')

//remove preexisting data
Comment.deleteMany({})
    .then(() => {
        //inserts data then returns it to log into the ".then"
        return Comment.insertMany(seedData)
        //if insert was successful, we'll see the results in the terminal
        .then(console.log)
        //if unsuccesful, logs the error
        .catch(console.error)
        //closes connection to database
        .finally(() => {
            process.exit()
        })
    })