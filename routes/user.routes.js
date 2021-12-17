const Router = require('express')
const router = Router()
const UserController = require('../controller/user.controller')

router.post('/user', UserController.createUser)
router.get('/user', UserController.getUser)
router.get('/user/:id', UserController.getOneUser)
router.put('/user', UserController.updateUser)
router.delete('/user/:id', UserController.deleteUser)

module.exports = router