const serialize = require('../../middlewares/serialize')
const Joi = require('joi')

const validations = Joi.object().keys({
  name: Joi.string().min(3).max(30).required(),
  recipe: Joi.array().items(Joi.string()).min(1).unique(),
})

async function handler(req, res, next) {
  try {
    const result = Joi.validate(
      { name: req.body.name, recipe: req.body.recipe },
      validations
    )

    if(result.error) res.status(400).send(result.error) 

  } catch (error) {
    console.log(error)
  }
}

module.exports = [serialize(handler)]
