const express = require('express')
const router = express.Router()

const spotifyURL = 'https://api.spotify.com//v1/playlists/37i9dQZF1DWVFJtzvDHN4L/tracks'

router.get('/', (req, res) => {
    res.send('Test')
})

module.exports = router