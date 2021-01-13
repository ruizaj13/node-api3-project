const express = require('express');
const router = express.Router();
const Users = require('./users-model')
const {logger, validateUserId, validateUser, validatePostId, validatePost} = require('../middleware/middleware')

router.post('/', (req, res) => {
  // do your magic!
  // this needs a middleware to check that the request body is valid
});

router.get('/', (req, res, next) => {
  Users.get()
    .then(users => {
      res.status(200).json(users)
    })
    .catch(error => {
      next(error)
    })
});

router.get('/:id', validateUserId, (req, res) => {
  res.status(200).json(req.user)
});

router.delete('/:id', (req, res) => {
  // do your magic!
  // this needs a middleware to verify user id
});

router.put('/:id', (req, res) => {
  // do your magic!
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
});

router.post('/:id/posts', (req, res) => {
  // do your magic!
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
});

router.get('/:id/posts', (req, res) => {
  // do your magic!
  // this needs a middleware to verify user id
});

router.use((error, req, res, next) => {
  res.status(500).json({
    message: error.message
  })
})

// do not forget to export the router
module.exports = router;
