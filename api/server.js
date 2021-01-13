const express = require('express');
const server = express();
const {logger} = require('./middleware/middleware')

server.use(express.json())

// remember express by default cannot parse JSON in request bodies

// global middlewares and routes need to be connected here
server.use(logger)

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

module.exports = server;
