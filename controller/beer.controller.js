const db = require('../db')
class BeerController {
    async createBeer (req, res){
        const {title, description, price, maker_id} = req.body
        try {
            const newbeer = await db.query(
                'INSERT INTO beers (title, description, price, maker_id) values ($1, $2, $3, $4) RETURNING *', 
                [title, description, price, maker_id]
            )
            console.log(title, description, price, maker_id)
            res.json(newbeer.rows[0])
        } catch (error) {
            console.log(error.message)
        }
    }

    async getBeer (req, res){
        try {
            const beer = await db.query('SELECT *, (SELECT AVG(evaluation) FROM evaluations WHERE beers.id = evaluations.beer_id) AS average_evaluation FROM beers')
            res.json(beer.rows)
        } catch (error) {
            console.log(error.message)
        }
    }

    async getOneBeer (req, res){
        const id = req.params.id
        try {
            const beer = await db.query('SELECT *, (SELECT AVG(evaluation) FROM evaluations WHERE beers.id = evaluations.beer_id) AS average_evaluation FROM beers where id = $1', [id])
            res.json(beer.rows[0])
        } catch (error) {
            console.log(error.message)
        }
    }

    async updateBeer (req, res){
        const {id, title, description, price, maker_id} = req.body
        try {
            const beer = await db.query(
                'UPDATE beers set title = $1, description = $2, price = $3, maker_id = $4 where id = $5 RETURNING *',
                [title, description, price, maker_id, id]
            )
            res.json(beer.rows[0])
        } catch (error) {
            console.log(error.message)
        }
    }

    async deleteBeer (req, res){
        const id = req.params.id
        try {
            const beer = await db.query('DELETE FROM beers where id = $1', [id])
            res.json(beer.rows[0])
        } catch (error) {
            console.log(error.message)
        }
    }
}

module.exports = new BeerController