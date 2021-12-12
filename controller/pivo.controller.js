const db = require('../db')
class PivoController {
    async createPivo (req, res){
        const {title, description, price, bitterness} = req.body
        const newPivo = await db.query(
            'INSERT INTO pivo (title, description, price, bitterness) values ($1, $2, $3, $4) RETURNING *', 
            [title, description, price, bitterness]
        )
        console.log(title, description, price, bitterness)
        res.json(newPivo.rows[0])
    }

    async getPivo (req, res){
        const pivo = await db.query('SELECT * FROM pivo')
        res.json(pivo.rows)
    }

    async getOnePivo (req, res){
        const id = req.params.id
        const pivo = await db.query('SELECT * FROM pivo where id = $1', [id])
        res.json(pivo.rows[0])
    }

    async updatePivo (req, res){
        const {id, title, description, price, bitterness} = req.body
        const pivo = await db.query(
            'UPDATE pivo set title = $1, description = $2, price = $3, bitterness = $4 where id = $5 RETURNING *',
            [title, description, price, bitterness, id]
        )
        res.json(pivo.rows[0])
    }

    async deletePivo (req, res){
        const id = req.params.id
        const pivo = await db.query('DELETE FROM pivo where id = $1', [id])
        res.json(pivo.rows[0])
    }
}

module.exports = new PivoController