const express = require('express')
const app = express()
const port = 8000

const routeHandler = require('./routes')
const router = routeHandler()

app.use(router)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
