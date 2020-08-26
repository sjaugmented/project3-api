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

const show = (req, res) => {
  db.Playlist.findById(req.params.id, (err, foundPlaylist)=> {
    if(err) console.log(err)
    if(!foundPlaylist) return res.json({message: 'none found'})
    res.json({ playlist: foundPlaylist })
  })
}





module.exports = {
  index,
  show
}