require('dotenv').config({ path: '../.env' })

module.exports = {
  db: process.env.DB_HOST,
  port: process.env.PORT,
  authSecret: process.env.SECRET_KEY,
  ttl: process.env.TTL,
  mailConfig: {
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD
    }
  }
}
