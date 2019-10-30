const express = require('express');
const userDb = require('./userDb.js');
const postDb = require('../posts/postDb.js')

const router = express.Router();

router.post('/', validateUser, (req, res) => {
    const name = req.body

    userDb.insert(name)
    .then(item => {
        res.status(201).json(item)
    })
    .catch(() => {
        res.status(500).json({ error: "The posts information could not be retrieved." })
    })
});

router.post('/:id/posts', validateUserId, (req, res) => {
    // const id = req.params.id
    const post = req.body

    postDb.insert(post)
    .then(post => {
        res.status(201).send(post)
    })
    .catch(() => {
        res.status(500).json({ error: "There was an error while saving the comment to the database"})
    })
});

router.get('/', (req, res) => {

});

router.get('/:id', (req, res) => {

});

router.get('/:id/posts', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

//custom middleware

function validateUserId(req, res, next) {
    const id = req.body.user_id
   

    if(id) {
        userDb.getById(id)
        .then(user =>{
            if(user) {
                next();
            } else {
                res.status(400).json({ message: "invalid user id" })
            }
        })
        .catch(() => {
            res.status(500).json({ error: 'server error'})
        })
    } else {
        next()
    }

};

function validateUser(req, res, next) {
    console.log(`\n === validate user console ====\n`)    
    const name = req.body.name
    console.log('name please', name)

    if(!req.body) {
        res.status(400).json({ message: "missing user data" })
    } 
    if(!name) {
        res.status(400).json({ message: "missing required name field" })
    } else {
        next();
    }
};

function validatePost(req, res, next) {

};

module.exports = router;
