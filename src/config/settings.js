require('dotenv').config({ path: '../.env' })

module.exports = {
  db: process.env.DB_HOST,
  port: process.env.PORT
}
