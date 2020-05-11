
module.exports = function(cb) {
  return async function(req, res, next) {
    try {
      /* istanbul ignore if */
      const resp = await cb(req, res, next)
      // memory leak debug
      resp && resp._meta && delete resp._meta
      delete res.result

      res.json(resp)
    } catch (err) {
      /* istanbul ignore if */
      next(err)
    }
  }
}
