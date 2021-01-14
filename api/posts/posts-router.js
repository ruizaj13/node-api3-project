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

router.delete('/:id', (req, res) => {
  // do your magic!
  // this needs a middleware to verify post id
});

router.put('/:id', (req, res) => {
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