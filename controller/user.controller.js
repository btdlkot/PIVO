const db = require('../db')
class UserController {
    async createUser (req, res){
        const {name, surname, mail} = req.body
        const newuser = await db.query(
            'INSERT INTO users (name, surname, mail) values ($1, $2, $3) RETURNING *', 
            [name, surname, mail]
        )
        console.log(name, surname, mail)
        res.json(newuser.rows[0])
    }

    async getUser (req, res){
        const user = await db.query('SELECT * FROM users')
        res.json(user.rows)
    }

    async getOneUser (req, res){
        const id = req.params.id
        const user = await db.query('SELECT * FROM users where id = $1', [id])
        res.json(user.rows[0])
    }

    async updateUser (req, res){
        const {id, name, surname, mail} = req.body
        const user = await db.query(
            'UPDATE users set name = $1, surname = $2, mail = $3 where id = $4 RETURNING *',
            [name, surname, mail, id]
        )
        res.json(user.rows[0])
    }

    async deleteUser (req, res){
        const id = req.params.id
        const user = await db.query('DELETE FROM users where id = $1', [id])
        res.json(user.rows[0])
    }
}

module.exports = new UserController