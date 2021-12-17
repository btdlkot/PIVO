const db = require('../db')
class UserController {
    async createUser (req, res){
        const {name, surmame, mail} = req.body
        const newuser = await db.query(
            'INSERT INTO users (name, surmame, mail) values ($1, $2, $3) RETURNING *', 
            [name, surmame, mail]
        )
        console.log(name, surmame, mail)
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
        const {id, name, surmame, mail} = req.body
        const user = await db.query(
            'UPDATE users set name = $1, surmame = $2, mail = $3 where id = $4 RETURNING *',
            [name, surmame, mail, id]
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