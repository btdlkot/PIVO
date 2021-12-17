const express = require('express')
const beerRouter = require('./routes/beer.routes')
const makerRouter = require('./routes/maker.routes')
const userRouter = require('./routes/user.routes')
const evaluationRouter = require('./routes/evaluation.routes')
const app = express()
const port = 3000

app.use(express.json())
app.use('/api', beerRouter)
app.use('/api', makerRouter)
app.use('/api', userRouter)
app.use('/api', evaluationRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
