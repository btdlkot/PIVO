const db = require('../db')
class EvaluationController {
    async createEvaluation (req, res){
        const {user_id, beer_id, comment, evaluation} = req.body
        try {
            const newEvaluation = await db.query(
                'INSERT INTO evaluations (user_id, beer_id, comment, evaluation) values ($1, $2, $3, $4) RETURNING *', 
                [user_id, beer_id, comment, evaluation]
            )
            console.log(user_id, beer_id, comment, evaluation)
            res.json(newEvaluation.rows[0])    
        } catch (error) {
            console.log(error.message)
        }
        
    }

    async updateEvaluation (req, res){
        const {id, user_id, beer_id, comment, evaluation} = req.body
        try {
            const evaluation = await db.query(
                'UPDATE evaluations set user_id = $1, beer_id = $2, comment = $3, evaluation = $4 where id = $5 RETURNING *',
                [user_id, beer_id, comment, evaluation, id]
            )
            res.json(evaluation.rows[0])
        } catch (error) {
            console.log(error.message)
        }
    }

    async deleteEvaluation (req, res){
        const id = req.params.id
        try {
            const evaluation = await db.query('DELETE FROM evaluations where id = $1', [id])
            res.json(evaluation.rows[0])
        } catch (error) {
            console.log(error.message)
        }
    }
}

module.exports = new EvaluationController