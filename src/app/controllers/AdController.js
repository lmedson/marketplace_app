const Ad = require('../models/Ad')

class AdController {
  async index (req, res, next) {
    try {
      const filters = {}

      if (req.query.price_min || req.query.price_max) {
        filters.price = {}

        if (req.query.price_min) {
          filters.price.$gte = req.query.price_min
        }

        if (req.query.price_max) {
          filters.price.$lte = req.query.price_max
        }
      }

      if (req.query.title) {
        filters.title = new RegExp(req.query.title, 'i')
      }

      const ads = await Ad.paginate(filters, {
        page: req.query.page || 1,
        limit: 20,
        populate: ['author'],
        sort: '-createdAt'
      })

      return res.status(200).json(ads)
    } catch (err) {
      return next(err)
    }
  }
  async show (req, res, next) {
    try {
      const ad = await Ad.findById(req.params.id)

      return res.status(200).json(ad)
    } catch (err) {
      return next(err)
    }
  }
  async store (req, res, next) {
    try {
      console.log(req.userId)
      const ad = await Ad.create({ ...req.body, author: req.userId })

      return res.status(201).json(ad)
    } catch (err) {
      return next(err)
    }
  }
  async update (req, res, next) {
    try {
      const ad = await Ad.findByIdAndUpdate(req.params.id, req.body, {
        new: true // after update, change infos on ad to return new data
      })

      return res.status(200).json(ad)
    } catch (err) {
      return next(err)
    }
  }
  async destroy (req, res, next) {
    try {
      await Ad.findByIdAndDelete(req.params.id)

      return res.send('ok')
    } catch (err) {
      return next(err)
    }
  }
}

module.exports = new AdController()
