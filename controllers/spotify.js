const db = require('../models')
const redirect = 'https://spotify-us/herokuapp.com/api/v1/#'

const login = (req, res) => {
    // The request will be redirected to spotify for authentication, so this function will not be called.
}
const callback = (req, res) => {
    // Successful authentication, redirect home.
    res.redirect(redirect || 'http://localhost:3000')
}

const logout = (req, res) => {
    req.logout()
    res.redirect(redirect || 'http://localhost:3000')
}

const verify = (req, res) => {
    console.log('verifying:', req.user)
    if (req.user) {
        res.json({
            spotifyId: req.user.spotifyId,
            name: req.user.name,
            refresh: req.user.refresh,
            access: req.user.access,
            admin: req.user.admin,
            posts: req.user.posts
        })
    } else {
        res.json({
            message: 'no user'
        })
    }
}

module.exports = { login, callback, logout, verify }