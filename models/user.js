const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    spotifyId: {
        type: String,
        required: true
    }, 
    name: {
        type: String
    }, 
    token: {
        type: String,
        required: true
    },
    loggedIn: Boolean,
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post'
    }]
})

const User = mongoose.model('User', UserSchema)

module.exports = User