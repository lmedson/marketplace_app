const User = require('../models/User')
const Ad = require('../models/Ad')
const mail = require('../services/Mail')

class PurchaseController {
  async store (req, res, next) {
    try {
      const { ad, content } = req.body

      const purchaseAd = await Ad.findById(ad).populate('author')
      const user = await User.findById(req.userId)

      await mail.sendMail({
        from: ' "Medson Mendes" <medson@dd.com.br> ',
        to: purchaseAd.author.email,
        subject: `Solicitação de compra: ${purchaseAd.title}`,
        html: `<p>Teste ${content}</p>`
      })

      return res.send()
    } catch (err) {
      return next(err)
    }
  }
}

module.exports = new PurchaseController()
