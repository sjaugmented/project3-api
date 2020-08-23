const db = require('../models')

const index = (req, res) => {
  db.Playlist.find({}, (err, foundPlaylists) => {
    if(err) console.log("error")

    if(!foundPlaylists.length){
      return res.json({message: 'No playlists found'})
    }
    res.json({playlists: foundPlaylists})
  })
}


module.exports = {
  index
}