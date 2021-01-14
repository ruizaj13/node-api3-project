const express = require('express');
const router = express.Router();
const Posts = require('./posts-model')
const {validatePostId} = require('../middleware/middleware')

router.get('/', (req, res, next) => {
  Posts.get()
    .then(post => {
      res.status(201).json(post)
    })
    .catch(error => {
      next(error)
    })
});

router.get('/:id', validatePostId, (req, res) => {
  res.status(200).json(req.post)
});

router.delete('/:id', validatePostId, (req, res, next) => {
  Posts.remove(req.params.id)
    .then(post =>{
      res.status(200).json({message: 'post has been deleted'})
    })
    .catch(error => {
      next(error)
    })
});

router.put('/:id', validatePostId,(req, res) => {
  Posts.update(req.params.id, req.body)
    .then(post => {
      req.body.text ? res.status(200).json(post) : res.status(400).json({message: 'no changes were provided'})
    })
  // do your magic!
  // this needs a middleware to verify post id
});

router.use((error, req, res) => {
  res.status(500).json({
    message: error.message
  })
})
// do not forget to export the router

module.exports = router