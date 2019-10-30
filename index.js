const server = require('./server')

const port = 8020;
server.listen(port, () => console.log(`Listening on port ${port}`))
