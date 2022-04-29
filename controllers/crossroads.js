//setup requirements
// const { profile } = require('console') 
const { profile } = require('console')
const express = require('express')
const router = express.Router()
const passport = require('passport')
const Profile = require('../models/profiles-model')
const Login = require('../models/login-model')
const { render } = require('express/lib/response')

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

/*this route posts profile info to database*/
router.post('/editprofile', (req, res) => {
    const newProfile = new Profile({
        username: req.body.username,
        password: req.body.password,
        name: req.body.name,
        dob: req.body.dob,
        location: req.body.location,
        aboutMe: req.body.aboutMe,
        profilePicURL: req.body.profilePicURL 
    })
    newProfile.save()
    res.redirect(`profile/${req.body.username}`)
})
    
    
    // Profile.create(req.body)
        // .then(profiles => 
        //     res.render('profile', {profilesArray: profiles}))
        // })
    

router.get('profile/:id', (req, res) => {
    const id = req.body.username
    res.render('profile', 
        {
            id: req.body.id
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

//pdate routes
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