require('dotenv').config({ path: '../.env' })

module.exports = {
  db: process.env.DB_HOST,
  port: process.env.PORT,
  authSecret: process.env.SECRET_KEY,
  ttl: process.env.TTL
}
