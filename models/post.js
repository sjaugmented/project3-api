const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
    songId:{type: String},
    songName: String,
    albumName: String,
    albumArt: String, 
    artist: String,
    votes: {
        type: Number
    }, 
    timestamp: {
        type: Date
    },
    user: String,
    userSpotId: String,
    pending: Boolean
})

const Post = mongoose.model('Post', PostSchema)

module.exports = Post

