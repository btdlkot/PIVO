const Router = require('express')
const router = Router()
const BeerController = require('../controller/beer.controller')

router.post('/beer', BeerController.createBeer)
router.get('/beer', BeerController.getBeer)
router.get('/beer/:id', BeerController.getOneBeer)
router.put('/beer', BeerController.updateBeer)
router.delete('/beer/:id', BeerController.deleteBeer)

module.exports = router