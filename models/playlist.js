const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const PlaylistSchema = new Schema ({
    title: {
        type: String
    },
    posts: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post'
    },
    coverart: {
        type: String
    }
})

const Playlist = mongoose.model('Playlist', PlaylistSchema)

module.exports = Playlist