//setup requirements
// const { profile } = require('console') 
const express = require('express')
const router = express.Router()
const Profile = require('../models/profiles-model')


//show routes
router.get('/', (req, res) => {
    res.render('index')
})

//find routes
router.get('/:id', (req, res) => {
    Profile.findById(req.params.id)
        .then((profiles) => res.send(profiles))
})

//create routes
router.post('/create', (req, res) => {
    Profile.create(req.body)
        .then((profiles) => res.send(profiles))
})

//update routes
router.put('/:id', (req, res) => {
    Profile.findByIdAndUpdate({ _id: req.params.id },
        {
            username: req.body.username,
            name: req.body.name,
            dob: req.body.dob,
            location: req.body.location,
            aboutMe: req.body.aboutMe,
            profilePicURL: req.body.profilePicURL
        },
        {new: true})
    .then((profiles) => res.send(profiles))
})

//delete routes
router.delete('/:id', (req, res) => {
    Profile.findByIdAndRemove({_id: req.params.id}, req.body)
    .then((profiles) => res.send(profiles))
})

module.exports = router