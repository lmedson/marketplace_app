const User = require('../models/User')

class SessionController {
  async store (req, res, next) {
    try {
      const { email, password } = req.body

      const user = await User.findOne({ email })

      if (!user) {
        return res.status(400).json({ error: 'User not found' })
      }

      if (!(await user.compareHash(password))) {
        return res.status(400).json({ error: 'Invalid passowrd' })
      }

      return res.status(200).json({ user, token: User.generateToken(user) })
    } catch (err) {
      return next(err)
    }
  }
}

module.exports = new SessionController()
