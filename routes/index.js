const express = require('express')
const router = express.Router()
const axios = require('axios')
const spotifyURL = 'https://api.spotify.com//v1/playlists/37i9dQZF1DWVFJtzvDHN4L/tracks'


router.get('/', (req, res) => {
    res.send('Objective Secure')
})

module.exports = router