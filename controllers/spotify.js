const db = require('../models')

const login = (req, res) => {
    // The request will be redirected to spotify for authentication, so this
    // function will not be called.
}
const callback = (req, res) => {
    // Successful authentication, redirect home.
    res.redirect('http://localhost:3000/')
}

const logout = (req, res) => {
    req.logout()
    res.redirect('http://localhost:3000/')
}

module.exports = { login, callback, logout }