const db = require('../db')
class UserController {
    async createUser (req, res){
        const {name, surname, mail} = req.body
        try {
            const newUser = await db.query(
                'INSERT INTO users (name, surname, mail) values ($1, $2, $3) RETURNING *', 
                [name, surname, mail]
            )
            console.log(name, surname, mail)
            res.json(newUser.rows[0])
        } catch (error) {
            console.log(error.message)
        }
    }

    async getUser (req, res){
        try {
            const user = await db.query('SELECT * FROM users')
            res.json(user.rows)
        } catch (error) {
            console.log(error.message)
        }
    }

    async getOneUser (req, res){
        const id = req.params.id
        try {
            const user = await db.query('SELECT * FROM users where id = $1', [id])
            res.json(user.rows[0])
        } catch (error) {
            console.log(error.message)
        }
    }

    async updateUser (req, res){
        const {id, name, surname, mail} = req.body
        try {
            const user = await db.query(
                'UPDATE users set name = $1, surname = $2, mail = $3 where id = $4 RETURNING *',
                [name, surname, mail, id]
            )
            res.json(user.rows[0])
        } catch (error) {
            console.log(error.message)
        }
    }

    async deleteUser (req, res){
        const id = req.params.id
        try {
            const user = await db.query('DELETE FROM users where id = $1', [id])
            res.json(user.rows[0])
        } catch (error) {
            console.log(error.message)
        }
    }
}

module.exports = new UserController