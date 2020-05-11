const router = require('express').Router()

const db = require('../middlewares/db')

router.use(db())

module.exports = router
