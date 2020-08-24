const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose')
const passport = require('passport')


require('./passport/spotifyStrategy')


//set up port
const app = express()
const PORT = process.env.PORT || 3001

//#region MIDDLEWARE
// JSON parsing
app.use(express.json())

// CORS
app.use(cors()).use(cookieParser())

// passport & sessions
app.use(session({
    secret: 'I am mustard',
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
//#endregion

// routes
app.use('/api/v1', routes.playlists)
app.use('/api/v1/auth', routes.spotify)

app.listen(PORT, () => {
    console.log(`We're in ${PORT}, lets do this`)
})
