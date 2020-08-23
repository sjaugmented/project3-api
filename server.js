const express = require('express')
const mongoose = require('mongoose')


//set up port
const port = process.env.PORT || 3001
const app = express()

//require routes
const routes = require('./routes')


// middleware - JSON parsing
app.use(express.json());

//use routes
app.use('/api/v1/playlists', routes.playlists)


app.listen(port, () => {
    console.log(`We're in ${port}, lets do this`)
})
