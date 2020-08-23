const express = require('express')
const app = express()
const mongoose = require('mongoose')


//set up port
const port = process.env.PORT || 3001


//require routes
const routes = require('./routes/index.js')

//db config
mongoose.connect("mongodb://localhost/p3", { useNewUrlParser: true });
mongoose.set('useUnifiedTopology', true)

// middleware - JSON parsing
app.use(express.json());

//use routes
app.use('/', routes)


app.listen(port, () => {
    console.log(`We're in ${port}, lets do this`)
})
