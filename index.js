const express = require('express')
const app = express()


const dotenv=require("dotenv");
dotenv.config()
const PORT = process.env.PORT||8000
const routeHandler = require('./routes')
const router = routeHandler()

app.use(router)

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
