const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
var cookieParser = require('cookie-parser');
const mongoose = require('mongoose')
const passport = require('passport')


require('./passport/spotifyStrategy')


//set up port
const app = express()
const PORT = process.env.PORT || 3001

// middleware - JSON parsing
app.use(express.json())

// middleware - CORS config?
app.use(cors()).use(cookieParser())

// middleware - sessions config?
app.use(session({
    secret: 'I am mustard',
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())



app.use('/api/v1', routes.playlists)
//app.use('/api/v1/auth', routes.spotify)
app.get('/api/v1/auth/login', passport.authenticate('spotify', {
    scope: ['user-read-email', 'user-read-private'],
    showDialog: true
}), function (req, res) {
    // The request will be redirected to spotify for authentication, so this
    // function will not be called.
})

app.get(
    '/api/v1/auth/callback',
    passport.authenticate('spotify', {
        failureRedirect: '/api/v1/auth/login'
    }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('http://localhost:3000/');
    }
)

app.use('/', (req, res) => {
    res.send('Ready')
})
app.listen(PORT, () => {
    console.log(`We're in ${PORT}, lets do this`)
})
