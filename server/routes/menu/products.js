const serialize = require('../../middlewares/serialize')

async function handler(req, res, next) {
  try {

    const products = await req.db('products').select('*')
    return { products }
  
  } catch (error) {
    console.log(error)
  }
}

module.exports = [serialize(handler)]
