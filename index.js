//setting up app requirements
const express = require('express')
const expressSession = require('express-session')
const app = express()
const MongoClient = require('mongodb').MongoClient
const ejsLayouts = require('express-ejs-layouts')
const crossroadsController = require('./controllers/crossroads')
const passport = require('passport')
const passportLocal = require('passport-local').passport
const flash = require('connect-flash')
const methodOverride = require('method-override')
const Profile = require('./models/profiles-model')
const Comment = require('./models/comment-model')

//setting view engine/apps
app.use(express.urlencoded({ extended: false}))
app.set('view engine', 'ejs')
// app.use(express.json)

// app.use(ejsLayouts)
// app.use('/profile', crossroadsController)
app.use(methodOverride('_method'))
app.use(crossroadsController)




//delete route
// app.get('/profile/:username', Profile.deleteOne)

//setting up PORT
const PORT = 5000

app.listen(5000, () => {
    console.log(`listening on Port ${PORT}`)
})