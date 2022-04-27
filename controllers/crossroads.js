//setup requirements
const express = require('express')
const router = express.Router()


//setup routes 
router.get('/', (req, res) => {
    res.render('index')
})

//export file
module.exports = router