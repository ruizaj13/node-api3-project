// require your server and start it
const server = require('./api/server')

server.listen(4000, () => {
    console.log('server is up and running on port 4000')
})