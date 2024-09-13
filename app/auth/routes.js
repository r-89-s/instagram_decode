const express = require('express')
const router = express.Router()
const {signUp} = require('./controller')

router.post('/api/auth/signup', signUp)

module.exports = router