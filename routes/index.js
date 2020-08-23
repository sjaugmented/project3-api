const express = require('express')
const router = express.Router()
const axios = require('axios')

let spotifyURL = ` 	https://api.spotify.com//v1/playlists/37i9dQZF1DWVFJtzvDHN4L/tracks `

let key = '3dfb23664b73446abdb76ccb50b15c0e'

// const test = async() => {
// }

// test()

router.get('/', async (req, res) => {
    try {
        const result = await axios.get(`${spotifyURL}`)
        console.log(result)
        res.send(result)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router