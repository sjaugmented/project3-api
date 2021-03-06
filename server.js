const express = require('express')
require('dotenv').config()
const routes = require('./routes')
const cors = require('cors')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const passport = require('passport')
require('./passport/spotifyStrategy')

const app = express()

//#region MIDDLEWARE
// JSON parsing
app.use(express.json())

// CORS
app.use(cors({
    origin: [process.env.LOCAL_CLIENT],
    credentials: true,
    optionsSuccessStatus: 200,
}))

// passport & sessions
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
        url: process.env.MONGODB_URI
    }),
    cookie: {maxAge: 1000 * 60 * 60 * 24}
}))
app.use(passport.initialize())
app.use(passport.session())
//#endregion

// routes
app.use('/api/v1', routes.playlists)
app.use('/api/v1/posts', routes.posts)
app.use('/api/v1/users', routes.users)
app.use('/api/v1/auth', routes.spotify)

app.listen(process.env.PORT, () => {
    console.log(`We're in ${process.env.PORT}, lets do this`)
})