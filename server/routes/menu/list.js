const serialize = require('../../middlewares/serialize')

async function handler(req, res, next) {
  try {
    const rolls = await req.db('rolls').select('*')

    return { rolls }
  } catch (error) {
    console.log(error)
  }
}

module.exports = [serialize(handler)]
