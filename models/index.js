require('dotenv').config()
const mongoose = require('mongoose');

const connectionString = process.env.DATABASE_URL
const configOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}

mongoose.connect(connectionString, configOptions)
    .then(() => console.log(`MongoDB successfully connected to ${connectionString}`))
    .catch(err => console.log(`MongoDB connection error: ${err}`))

module.exports = {
    Playlist: require('./playlist'),
    User: require('./user')
}
