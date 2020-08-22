const express = require('express')

const app = express()
const port = process.env.PORT || 3000

// const routes = require('./routes/index')
// app.use('/home', routes)

app.listen(port, () => {
    console.log(`We're in ${port}, lets do this`)
})