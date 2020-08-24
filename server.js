const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const cookieParser = require('cookie-parser');
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
    saveUninitialized: false,
    resave: false,
    store: new MongoStore({
        url: process.env.MONGODB_URI || "mongodb://localhost:27017/p3"
    }),
    cookie: {maxAge: 1000 * 60 * 60 * 24}
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
