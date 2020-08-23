const express = require('express')
<<<<<<< HEAD
const axios = require('axios')
=======
const mongoose = require('mongoose')
const cors = require('cors')
>>>>>>> 42296dd8253ee5fa8088fef33c375f8b398f25d0



//set up port
const port = process.env.PORT || 3001
const app = express()

<<<<<<< HEAD
app.use(express.json())

const routes = require('./routes')
app.use('/', routes)
=======
//require routes
const routes = require('./routes')


// middleware - JSON parsing
app.use(cors())
app.use(express.json());

//use routes
app.use('/api/v1/playlists', routes.playlists)
>>>>>>> 42296dd8253ee5fa8088fef33c375f8b398f25d0


app.listen(port, () => {
    console.log(`We're in ${port}, lets do this`)
})
