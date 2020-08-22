const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
    song: {
        //Spotify songID
    },
    votes: {
        type: Number
    }, 
    timestamp: {
        type: Date
    },
    user: {
        //Spotify userID
    }
})

const Post = mongoose.model('Post', PostSchema)

module.exports = Post

