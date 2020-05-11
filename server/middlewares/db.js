const DB = require('../db')

module.exports = function () {
  return function (req, res, next) {
    req.db = DB()
    next()
  }
}
