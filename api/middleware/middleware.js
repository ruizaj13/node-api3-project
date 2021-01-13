const Users = require('../users/users-model')

function logger(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method} to ${req.url} from ${req.get('Origin')}`)
  next()
}

async function validateUserId(req, res, next) {
  try {
    const user = await Users.getById(req.params.id)
    if (user) {
      req.user = user //req.user is a variable here to with hub is being stored in
      next() //never forget, allows to move forward to next middleware(routes count as middleware)
    } else {
      res.status(404).json(`User with id ${req.params.id} not found`)
    }
  } catch (err) {
    res.status(500).json('Something has gone terribly wrong')
  }
}

function validateUser(req, res, next) {
  // req.body.name ? next() : 
}

function validatePostId(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

// do not forget to expose these functions to other modules
module.exports = {logger, validateUserId, validateUser, validatePostId, validatePost}