function logger(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method} to ${req.url} from ${req.get('Origin')}`,
  next()
  )
}

function validateUserId(req, res, next) {
  // do your magic!
}

function validateUser(req, res, next) {
  // do your magic!
}

function validatePostId(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

// do not forget to expose these functions to other modules
module.exports = {logger, validateUserId, validateUser, validatePostId, validatePost}