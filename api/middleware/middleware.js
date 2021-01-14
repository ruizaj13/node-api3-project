const Users = require('../users/users-model')
const Posts = require('../posts/posts-model')

function logger(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method} to ${req.url} from ${req.get('Origin')}`)
  next()
}

async function validateUserId(req, res, next) {
  try {
    const user = await Users.getById(req.params.id)
    if (user) {
      req.user = user //req.user is a variable here to which hub is being stored in
      next() //never forget, allows to move forward to next middleware(routes count as middleware)
    } else {
      res.status(404).json(`User with id ${req.params.id} not found`)
    }
  } catch (err) {
    res.status(500).json('Something has gone terribly wrong')
  }
}

function validateUser(req, res, next) {
  req.body.name ? next() : res.status(400).json({error: 'please provide a name for the user'})
}

async function validatePostId(req, res, next) {
  try {
    const post = await Posts.getById(req.params.id)
    if (post) {
      req.post = post
      next()
    } else {
      res.status(404).json(`post with id ${req.params.id} not found`)
    }
  } catch (err) {
    res.status(500).json('Something has gone terribly wrong')
  }
}

function validatePost(req, res, next) {
  req.body.text && req.body.user_id ? next() : res.status(400).json({error: 'please provide proper text and user ID'})
}

// do not forget to expose these functions to other modules
module.exports = {logger, validateUserId, validateUser, validatePostId, validatePost}