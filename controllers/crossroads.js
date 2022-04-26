//setup requirements
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index', {
        welcome: ['welcome!']
    })
})


module.exports = router