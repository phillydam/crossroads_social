//setup requirements
const { profile } = require('console')
const express = require('express')
const router = express.Router()
const Profile = require('../models/profiles-model')


//get all profiles
router.get('/', (req, res) => {
    Profile.find({})
        .then((profile) => {
            res.render('index', {profile})
        })
        .catch(console.error)
})

//get by id
router.get('/:id', (req, res) => {
    Profile.findById(req.params.id)
        .then((profile) => {
            res.send(req.params.id)
        })
        .catch(console.error)
})

//create route
// router.post('/', async (req, res) => {
//     Profile.create(req.body)
//         .then((profile) => {
//             const profile = new Profile({
//                 username: req.body.username,
//                 name: req.body.name,
//                 dob: req.body.dob,
//                 location: req.body.location,
//                 aboutMe: req.body.aboutMe,
//                 profilePicUrl: req.body.profilePicUrl
//             })
//     })
//     try {
//         const newProfile = await profile.save()
//         res.json(newProfile)
//     }
//     catch (err){
//         res.send(console.log('error'))
//     }
// })

router.post('/', (req, res) => {
    Profile.create(req.body)
        .then((profile) => {
            res.redirect('/profile', profile)
        })
        .catch(console.error)
})

//update profile info. Using patch instead of update so only modified data gets updated.
router.patch(':id', (req, res) => {
    // res.send(req.params.id)
})

//delete route
router.delete('/:id', (req, res) => {
    // res.send(req.params.id)
})

//export file
module.exports = router