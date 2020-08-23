const express = require('express')
const axios = require('axios')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

const routes = require('./routes')
app.use('/', routes)


app.listen(port, () => {
    console.log(`We're in ${port}, lets do this`)
})
