const express = require('express')
const beerRouter = require('./routes/beer.routes')
const makerRouter = require('./routes/maker.routes')
const app = express()
const port = 3000

app.use(express.json())
app.use('/api', beerRouter)
app.use('/api', makerRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
