const router = require('express').Router()

router.get('/', require('./list'))
router.get('/:id', require('./recipe'))

module.exports = router