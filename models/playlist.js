const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const PlaylistSchema = new Schema ({
    title: String,
    posts: [
      {
        song: String, //Spotify songId
        albumName: String, // Spotfify Id
        albumArt: String, //??
        artist: String, //Spotify id
        votes: Number, 
        timestamp: Date,
        contributor: String //Spotify user Id
      }
    ],
    coverart: String
})

const Playlist = mongoose.model('Playlist', PlaylistSchema)

module.exports = Playlist