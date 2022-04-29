//setup requirements
// const { profile } = require('console') 
const { profile } = require('console')
const express = require('express')
const router = express.Router()
const passport = require('passport')
const Profile = require('../models/profiles-model')
const Login = require('../models/login-model')

/*
get | profile | get all profiles
get | profile/1 | get profile with id 1
post | profile | create profile
put | profile | update profile
delete | profile | delete all profiles
delete | profile/1 | delete profile with id 1
*/

//login routes
router.get('/', (req, res) => {
    res.render('index')
    })

//edit/create profile route
router.get('/editprofile', (req, res) => {
    res.render('editProfile')
})

router.post('/editprofile', (req, res) => {
    const {
        username, 
        password,
        loginpassword, 
        name, 
        dob, 
        location, 
        aboutMe, 
        profilePicUrl
    } = req.body
    if (password !== loginpassword) {
        error.push({alert: "wrong password"})
    } else {
        Profile.findOne({username:  username}).exec((err, profile) => {
            console.log(profile)
            const newProfile = new Profile({
            username: req.body.username,
            password: req.body.password,
            name: req.body.name,
            dob: req.body.dob,
            location: req.body.location,
            aboutMe: req.body.aboutMe,
            profilePicURL: req.body.profilePicURL
            })
        })
    }
})


router.get('/:id', (req, res) => {
    const id = req.params.username
    res.render('editProfile', 
        {
            id: req.params.id
        },
        {
            username: req.body.username,
            password: req.body.password,
            name: req.body.name,
            dob: req.body.dob,
            location: req.body.location,
            aboutMe: req.body.aboutMe,
            profilePicURL: req.body.profilePicURL            
        }
    )
})


//profile routes
router.get('/profile', (req, res) => {
    Profile.find({}, function(err, profiles) {
        res.render('profile', {
            profilesArray: profiles
        })
    })
})

router.post('/profiles', (req, res) => {
    Profile.create(req.body)
        .then((profiles) => res.send(profiles))
})

//find routes
router.get('/:id', (req, res) => {
    Profile.findById(req.params.id)
        .then((profiles) => res.send(profiles))
})

//create routes
router.post('/profiles', (req, res) => {
    Profile.create(req.body)
        .then((profiles) => res.send(profiles))
})

router.post('/login', (req, res) => {
    res.redirect('/profile')
})

//update routes
router.put('/:id', (req, res) => {
    Profile.findByIdAndUpdate({ _id: req.params.id },
        {
            username: req.body.username,
            password: req.body.password,
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