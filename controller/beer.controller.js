const db = require('../db')
class beerController {
    async createbeer (req, res){
        const {title, description, price, bitterness, maker_id} = req.body
        const newbeer = await db.query(
            'INSERT INTO beer (title, description, price, bitterness, maker_id) values ($1, $2, $3, $4, $5) RETURNING *', 
            [title, description, price, bitterness, maker_id]
        )
        console.log(title, description, price, bitterness, maker_id)
        res.json(newbeer.rows[0])
    }

    async getbeer (req, res){
        const beer = await db.query('SELECT * FROM beer')
        res.json(beer.rows)
    }

    async getOnebeer (req, res){
        const id = req.params.id
        const beer = await db.query('SELECT * FROM beer where id = $1', [id])
        res.json(beer.rows[0])
    }

    async updatebeer (req, res){
        const {id, title, description, price, bitterness, maker_id} = req.body
        const beer = await db.query(
            'UPDATE beer set title = $1, description = $2, price = $3, bitterness = $4, maker_id = $5 where id = $6 RETURNING *',
            [title, description, price, bitterness, maker_id, id]
        )
        res.json(beer.rows[0])
    }

    async deletebeer (req, res){
        const id = req.params.id
        const beer = await db.query('DELETE FROM beer where id = $1', [id])
        res.json(beer.rows[0])
    }
}

module.exports = new beerController