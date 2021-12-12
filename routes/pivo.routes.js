const Router = require('express')
const router = Router()
const pivoController = require('../controller/pivo.controller')

router.post('/pivo', pivoController.createPivo)
router.get('/pivo', pivoController.getPivo)
router.get('/pivo/:id', pivoController.getOnePivo)
router.put('/pivo', pivoController.updatePivo)
router.delete('/pivo/:id', pivoController.deletePivo)

module.exports = router