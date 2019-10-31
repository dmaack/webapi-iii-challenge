const express = require('express');
const postDb = require('./postDb.js')
const router = express.Router();

router.get('/', (req, res) => {
    postDb.get()
    .then(posts => {
        res.status(200).json(posts)
    })
    .catch(() => {
        res.status(500).json({ error: "The posts information could not be retrieved." })
    })
});

router.get('/:id', (req, res) => {
    const id = req.params.id
    
    postDb.getById(id)
    .then(post => {
        if(post) {
            res.status(200).json(post)
        } else {
            res.status(404).json({ message: "The post with the specified ID does not exist." })
        }
    })
    .catch(() => {
        res.status(500).json({ error: "The post information could not be retrieved." })
    })
});

router.delete('/:id', (req, res) => {
    const id = req.params.id

    postDb.remove(id) 
    .then(success => {
        res.status(200).send(`The post with id ${success} was successfully deleted`)
    })
    .catch(() => {
        res.status(500).json({ error: "The post information could not be retrieved." })
    })
});

router.put('/:id', (req, res) => {

});

// custom middleware

function validatePostId(req, res, next) {

};

module.exports = router;