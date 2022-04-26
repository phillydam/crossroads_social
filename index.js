//setting up app requirements
const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')
const crossroadsController = require('./controllers/crossroads')

//setting view engine/apps
app.set('view engine', 'ejs')
app.use(crossroadsController)
app.use(ejsLayouts)

//setting up PORT
const PORT = 5000

app.listen(5000, () => {
    console.log(`listening on Port ${PORT}`)
})