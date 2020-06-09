const router = require('express').Router()

router.get('/', require('./list'))
router.get('/products', require('./products'))
router.get('/:id', require('./recipe'))
router.post('/create', require('./create'))

module.exports = router