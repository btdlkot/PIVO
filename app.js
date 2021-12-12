const express = require('express')
const pivoRouter = require('./routes/pivo.routes')
const app = express()
const port = 3000

app.use(express.json())
app.use('/api', pivoRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
