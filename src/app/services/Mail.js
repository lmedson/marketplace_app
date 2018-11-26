const nodemailer = require('nodemailer')
const { mailConfig } = require('../../config/settings')

const transport = nodemailer.createTransport(mailConfig)

module.exports = transport
