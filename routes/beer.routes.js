const Router = require('express')
const router = Router()
const beerController = require('../controller/beer.controller')

router.post('/beer', beerController.createbeer)
router.get('/beer', beerController.getbeer)
router.get('/beer/:id', beerController.getOnebeer)
router.put('/beer', beerController.updatebeer)
router.delete('/beer/:id', beerController.deletebeer)

module.exports = router