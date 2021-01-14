const express = require('express');
const router = express.Router();
const Users = require('./users-model')
const Posts = require('../posts/posts-model')
const {validateUserId, validateUser, validatePostId, validatePost} = require('../middleware/middleware')

router.post('/', validateUser, (req, res, next) => {
  Users.insert(req.body)
    .then(user => {
      res.status(201).json(user)
    })
    .catch(error => {
      next(error)
    })
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

router.delete('/:id', validateUserId, (req, res, next) => {
   Users.remove(req.params.id)
    .then(user => {
      res.status(200).json({message: 'user hase been deleted'})
    })
    .catch(error => {
      next(error)
    })
});

router.put('/:id', validateUserId, validateUser, (req, res, next) => {
  Users.update(req.params.id, req.body)
    .then(user => {
      res.status(200).json(user)
    })
    .catch(error => {
      next(error)
    })
  // do your magic!
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
});

router.post('/:id/posts', validateUserId, validatePost, (req, res, next) => {
  Users.getById(req.params.id)
    .then(user => {
      Posts.insert(req.body)
      .then(user => {
        res.status(200).json(user)
      })
      .catch(error => {
        next(error)
      })
    })
  // do your magic!
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
});

router.get('/:id/posts', validateUserId, (req, res, next) => {
  Users.getUserPosts(req.params.id)
    .then(post => {
      post.length ? res.status(200).json(post) : res.status(404).json('This user has no posts')
    })
    .catch(error => {
      next(error)
    })
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
