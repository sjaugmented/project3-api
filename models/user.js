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
    loggedIn: {
        type: Boolean
        //Will be used to display users that are online
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post'
    }]
})

const User = mongoose.model('User', UserSchema)

module.exports = User