const db = require('../models')

const index = async (req, res) => {
  try {
    const foundPlaylists = await db.Playlist.find({})
    if (!foundPlaylists.length) return await res.json({
      message: 'No playlists found'
    })

    await res.json({playlists: foundPlaylists})
  } catch (error) {
    console.log(error)
  }
}

const create = async (req, res) => {
  try {
    const savedPlaylist = await db.Playlist.create(req.body)
    
    await res.json({playlist: savedPlaylist})
  } catch (error) {
    console.log(error)
  }
}

const show = async (req, res) => {
  try {
    const foundPlaylist = await db.Playlist.findById(req.params.id)

    if (!foundPlaylist) return res.json({
      message: 'none found'
    })
    
    await res.json({ playlist: foundPlaylist })
  } catch (error) {
    console.log(error)
  }
}




module.exports = {
  index,
  create,
  show
}