//require model, which is connected to the database
const Logins = require('../models/login-model')

const seedData = require('./logins-seeds.json')

//remove preexisting data
Logins.deleteMany({})
    .then(() => {
        //inserts data then returns it to log into the ".then"
        return Logins.insertMany(seedData)
        //if insert was successful, we'll see the results in the terminal
        .then(console.log)
        //if unsuccesful, logs the error
        .catch(console.error)
        //closes connection to database
        .finally(() => {
            process.exit()
        })
    })