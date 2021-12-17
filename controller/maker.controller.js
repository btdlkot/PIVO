const db = require('../db')
class MakerController {
    async createMaker (req, res){
        const {title} = req.body
        const newMaker = await db.query(
            'INSERT INTO maker (title) values ($1) RETURNING *', 
            [title]
        )
        console.log(title)
        res.json(newMaker.rows[0])
    }

    async getMaker (req, res){
        const maker = await db.query('SELECT * FROM maker')
        res.json(maker.rows)
    }

    async getOneMaker (req, res){
        const id = req.params.id
        const maker = await db.query('SELECT * FROM maker where id = $1', [id])
        res.json(maker.rows[0])
    }

    async updateMaker (req, res){
        const {id, title} = req.body
        const maker = await db.query(
            'UPDATE maker set title = $1 where id = $2 RETURNING *',
            [title, id]
        )
        res.json(maker.rows[0])
    }

    async deleteMaker (req, res){
        const id = req.params.id
        const maker = await db.query('DELETE FROM maker where id = $1', [id])
        res.json(maker.rows[0])
    }
}

module.exports = new MakerController