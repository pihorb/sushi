const serialize = require('../../middlewares/serialize')

async function handler(req, res, next) {
  try {
    const { id } = req.params

    const food = await req
      .db('rolls')
      .join('recipe', 'rolls.id', 'recipe.roll_id')
      .join('products', 'products.id', 'recipe.product_id')
      .select('rolls.name AS roll', 'products.name AS ingredient')

  } catch (error) {
    console.log(error)
  }
}

module.exports = [
  serialize(handler)
]
