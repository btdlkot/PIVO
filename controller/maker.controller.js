const db = require('../db')
class MakerController {
    async createMaker (req, res){
        const {title} = req.body
        try {
            const newMaker = await db.query(
                'INSERT INTO makers (title) values ($1) RETURNING *', 
                [title]
            )
            console.log(title)
            res.json(newMaker.rows[0])
        } catch (error) {
            console.log(error.message)
        }
    }

    async getMaker (req, res){
        try {
            const maker = await db.query('SELECT * FROM makers')
            res.json(maker.rows)
        } catch (error) {
            console.log(error.message)
        }
    }

    async getOneMaker (req, res){
        const id = req.params.id
        try {
            const maker = await db.query('SELECT * FROM makers where id = $1', [id])
            res.json(maker.rows[0])
        } catch (error) {
            console.log(error.message)
        }
    }

    async updateMaker (req, res){
        const {id, title} = req.body
        try {
            const maker = await db.query(
                'UPDATE makers set title = $1 where id = $2 RETURNING *',
                [title, id]
            )
            res.json(maker.rows[0])
        } catch (error) {
            console.log(error.message)
        }
    }

    async deleteMaker (req, res){
        const id = req.params.id
        try {
            const maker = await db.query('DELETE FROM makers where id = $1', [id])
            res.json(maker.rows[0])
        } catch (error) {
            console.log(error.message)
        }
    }
}

module.exports = new MakerController