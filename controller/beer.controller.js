const db = require('../db')
class BeerController {
    async createBeer (req, res){
        const {title, description, price, maker_id} = req.body
        const newbeer = await db.query(
            'INSERT INTO beers (title, description, price, maker_id) values ($1, $2, $3, $4) RETURNING *', 
            [title, description, price, maker_id]
        )
        console.log(title, description, price, maker_id)
        res.json(newbeer.rows[0])
    }

    async getBeer (req, res){
        const beer = await db.query('SELECT * FROM beers')
        res.json(beer.rows)
    }

    async getOneBeer (req, res){
        const id = req.params.id
        const beer = await db.query('SELECT * FROM beers where id = $1', [id])
        res.json(beer.rows[0])
    }

    async updateBeer (req, res){
        const {id, title, description, price, maker_id} = req.body
        const beer = await db.query(
            'UPDATE beers set title = $1, description = $2, price = $3, maker_id = $4 where id = $5 RETURNING *',
            [title, description, price, maker_id, id]
        )
        res.json(beer.rows[0])
    }

    async deleteBeer (req, res){
        const id = req.params.id
        const beer = await db.query('DELETE FROM beers where id = $1', [id])
        res.json(beer.rows[0])
    }
}

module.exports = new BeerController