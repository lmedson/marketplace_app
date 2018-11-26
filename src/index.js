const server = require('./server')
const settings = require('./config/settings')

server.listen(settings.port || 3000, () =>
  console.log(`Server is running on port ${settings.port}`)
)
