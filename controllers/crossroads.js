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
    // res.redirect(`profile/${req.body.username}`)
    })

//edit/create profile route
router.get('/editprofile', (req, res) => {
    res.render('editProfile')
})

/*this route posts profile info to database*/
router.post('/editProfile', (req, res) => {
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
    
//profile routes
router.get('/profile/:username', (req, res) => {
    Profile.find({ username: req.params.username}, function(err, profiles){
        res.render(`profile`, {
            profilesArray: profiles
        })
    })
})


//find routes
// router.get('/:id', (req, res) => {
//     Profile.findById(req.params.id)
//         .then((profiles) => res.send(profiles))
// })

//create routes
router.post('/profiles', (req, res) => {
    Profile.create(req.body)
        .then((profiles) => res.send(profiles))
})

router.post('/login', (req, res) => {
    res.redirect('/profile')
})

//update routes
// router.put('/profile/:id', (req, res) => {
//     Profile.find({ _id: req.params.id}, function(err, profiles){
//     const updatedProfile = new Profile({
//         username: req.body.username,
//         password: req.body.password,
//         name: req.body.name,
//         dob: req.body.dob,
//         location: req.body.location,
//         aboutMe: req.body.aboutMe,
//         profilePicURL: req.body.profilePicURL 
//     })
//     updatedProfile.save(`/profile/${req.body.username}`)
//     res.redirect('/editProfile')
//     })
// })


// router.put('/profile/:id', (req, res) => {
//     Profile.findByIdAndUpdate({ username: req.params.username}, function(err, profiles)
//     {
//         res.render('profile', {
//         profilesArray: profiles})
//     },
//         {new: true}
//     )
//     .then((profiles) => res.render('profile', profiles))
// })

// router.get('/editProfile/:id', (req, res) => {
//     Profile.findById(req.params.id)
//         .then(profiles => {
//             res.render('editProfile', profiles)}
//             )}
//         )

router.put('editProfile/:id', (req, res) =>{
    Profile.findOneAndUpdate(
        {_id: req.params.id},
        {
            username: req.body.username,
            password: req.body.password,
            name: req.body.name,
            dob: req.body.dob,
            location: req.body.location,
            aboutMe: req.body.aboutMe,
            profilePicURL: req.body.profilePicURL 
        },
    )
    .then( profiles => {
        res.render('editProfile', profiles)
    })
})

//delete routes
// router.delete('/profile/:id', (req, res) => {
//     Profile.findByIdAndRemove({_id: req.params.id}, function (err, profiles){
//         res.render('profile', {profilesArray: profiles})
//         res.redirect('/')
//     })
// })

router.delete('/profile/:id', (req, res) => {
    Profile.findByIdAndDelete({_id: req.params.id}).then(profiles =>
        res.redirect('/')
        )})


// router.delete('/profile/:id', (req, res) => {
//     const profileId = req.params.id
// })

module.exports = router