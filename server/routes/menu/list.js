const serialize = require('../../middlewares/serialize')

async function handler(req, res, next) {
  req.db('products').select('id').then(d => console.log(d))
}

module.exports = [
  serialize(handler)
]
