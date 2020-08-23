const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const PlaylistSchema = new Schema ({
    title: String,
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
      }
    ],
    coverart: String
})

const Playlist = mongoose.model('Playlist', PlaylistSchema)

module.exports = Playlist