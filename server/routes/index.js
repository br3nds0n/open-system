const router = require('express').Router()
const UserController = require('../app/controller/UserController')

const controller = new UserController()

router.post('/cadastrar', controller.create)

module.exports = router
