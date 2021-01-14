// require your server and start it
require('dotenv').config()
const server = require('./api/server')

const PORT = process.env.PORT || 5000

server.listen(PORT, () => {
    console.log(`server is up and running on port ${PORT}`)
})