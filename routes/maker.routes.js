const Router = require('express')
const router = Router()
const MakerController = require('../controller/maker.controller')

router.post('/maker', MakerController.createMaker)
router.get('/maker', MakerController.getMaker)
router.get('/maker/:id', MakerController.getOneMaker)
router.put('/maker', MakerController.updateMaker)
router.delete('/maker/:id', MakerController.deleteMaker)

module.exports = router