const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
    song: String, //Spotify songId
    albumName: String, // Spotfify Id
    albumArt: String, //??
    artist: String, //Spotify id
    votes: {
        type: Number
    }, 
    timestamp: {
        type: Date
    },
    user: String,
    pending: Boolean //Spotify user Id
})

const Post = mongoose.model('Post', PostSchema)

module.exports = Post

