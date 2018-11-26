const User = require('../models/User')

class UserController {
  async store (req, res, next) {
    try {
      const { email } = req.body

      if (await User.findOne({ email })) {
        return res.status(400).json({ error: 'User already exists' })
      }

      const user = await User.create(req.body)

      return res.status(201).json(user)
    } catch (err) {
      next(err)
    }
  }
}

module.exports = new UserController()
