const router = require('express').Router()
const db = require('../middlewares/db')

router.use(db())
router.use('/menu', require('./menu'))

module.exports = router
