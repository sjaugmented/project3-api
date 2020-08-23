const db = require('../models')

const index = (req, res) => {
  db.Playlist.find({}, (err, foundPlaylist) => {
    if(err) console.log("error")

    res.send("AYYYY")
  })
}


module.exports = {
  index
}