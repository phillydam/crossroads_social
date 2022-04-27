//require model, which is connected to the database
const Profiles = require('../models/crossroads-model')

const seedData = require('./crossroads-seeds.json')

//remove preexisting data
Profiles.deleteMany({})
    .then(() => {
        //inserts data then returns it to log into the ".then"
        return Profiles.insertMany(seedData)
        //if insert was successful, we'll see the results in the terminal
        .then(console.log)
        //if unsuccesful, logs the error
        .catch(console.error)
        //closes connection to database
        .finally(() => {
            process.exit()
        })
    })