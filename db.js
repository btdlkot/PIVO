const Pool = require('pg').Pool
const pool = new Pool({
    user: "postgres",
    password: "1408",
    host: "localhost",
    port: "5432",
    database: "beer"
})

module.exports = pool