const kue = require('kue')
const { redisConfig } = require('../../config/settings')
const jobs = require('../jobs')

const Queue = kue.createQueue({ redis: redisConfig })

Queue.process(jobs.PurchaseMail.key, jobs.PurchaseMail.handle)

module.exports = Queue
