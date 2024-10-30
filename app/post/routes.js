const express = require('express')
const router = express.Router()
const {getPost, createPost} = require('./controller')

router.get('/api/post/get', getPost)
router.post('/api/post/post', createPost)

module.exports = router