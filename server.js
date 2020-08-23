const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
var cookieParser = require('cookie-parser');
const mongoose = require('mongoose')




//set up port
const port = process.env.PORT || 3001
const app = express()
const PORT = process.env.PORT || 3001

// middleware - JSON parsing
app.use(express.json())

// middleware - CORS config?
app.use(cors()).use(cookieParser())

// middleware - sessions config?
app.use('/api/v1/playlists', routes.playlists)
app.use('/api/v1/auth', routes.spotify)

app.use('/', (req, res) => {
    res.send('Ready')
})
app.listen(PORT, () => {
    console.log(`We're in ${PORT}, lets do this`)
})
