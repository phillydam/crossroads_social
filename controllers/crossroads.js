//setup requirements
// const { profile } = require('console') 
const { profile } = require('console')
const express = require('express')
const router = express.Router()
const passport = require('passport')
const Profile = require('../models/profiles-model')
const Login = require('../models/login-model')
const { render } = require('express/lib/response')
const Stream = require('../models/stream-model')
const Comment = require('../models/comment-model')


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
    
//get profile routes
router.get('/profile/:username', (req, res) => {
    Profile.find({ username: req.params.username}, function(err, profiles){
        res.render(`profile`, {
            profilesArray: profiles
        })
    })
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
router.delete('/profile/:id', (req, res) => {
    Profile.findByIdAndDelete({_id: req.params.id}).then(profiles =>
        res.redirect('/')
        )})


//comment box routes
router.post('/profile/:id', (req,res) =>{      
    const newComment = new Comment({
        name:req.body.name, 
        comment:req.body.comment
    })
    newComment.save()
}) 


// router.post('/profile', (req, res) => {
//     Comment.create(req.body)
//         .then((comments) => res.send(comments))
// })


router.get('/profile', (req, res) => {
    Comment.find({ comment: req.params.comment}, function(err, comments){
        res.render(`profile`, {
            commentsArray: comment

        })
    })
})



// router.get('/profile/:username', (req, res) => {
//     Profile.find({ username: req.params.username}, function(err, profiles){
//         res.render(`profile`, {
//             profilesArray: profiles
//         })
//     })
// })


module.exports = router