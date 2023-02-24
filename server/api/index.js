const router = require('express').Router()

router.use('/users', require('./users'));

//add additional model routes here as you create them!

module.exports = router;