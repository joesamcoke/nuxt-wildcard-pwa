const { Router } = require('express')
const router = Router()

router.use('/manifest.json', (req, res) => {
  res.end('Hello world!')
})

module.exports = router

