//require model, which is connected to the database
const Streams = require('../models/stream-model')

const seedData = require('./stream-seeds.json')

//remove preexisting data
Streams.deleteMany({})
    .then(() => {
        //inserts data then returns it to log into the ".then"
        return Streams.insertMany(seedData)
        //if insert was successful, we'll see the results in the terminal
        .then(console.log)
        //if unsuccesful, logs the error
        .catch(console.error)
        //closes connection to database
        .finally(() => {
            process.exit()
        })
    })