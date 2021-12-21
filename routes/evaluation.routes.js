const Router = require('express')
const router = Router()
const EvaluationController = require('../controller/evaluation.controller')

router.post('/evaluation', EvaluationController.createEvaluation)
router.put('/evaluation', EvaluationController.updateEvaluation)
router.delete('/evaluation/:id', EvaluationController.deleteEvaluation)
router.get('/evaluation/:id', EvaluationController.commentsAboutBeer)

module.exports = router