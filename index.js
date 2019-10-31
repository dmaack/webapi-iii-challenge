require('dotenv').config()
const server = require('./server')


const port = process.env.PORT || 8000;
// const port = 8020;
server.listen(port, () => console.log(`Listening on port ${port}`))
