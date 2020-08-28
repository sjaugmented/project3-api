const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
    songId:{type: String, unique: true},
    songName: String, //
    albumName: String, //
    albumArt: String, //
    artist: String, //
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

