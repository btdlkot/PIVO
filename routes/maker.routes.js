const Router = require('express')
const router = Router()
const makerController = require('../controller/maker.controller')

router.post('/maker', makerController.createMaker)
router.get('/maker', makerController.getMaker)
router.get('/maker/:id', makerController.getOneMaker)
router.put('/maker', makerController.updateMaker)
router.delete('/maker/:id', makerController.deleteMaker)

module.exports = router