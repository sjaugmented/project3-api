require('dotenv').config()
const db = require('./models')

const data = {
  "playlists": [
    {
      posts: [],
      title: 'Electronic',
      coverart: 'https://i.imgur.com/gSGz5QE.jpg'
    },
    {
      posts: [],
      title: 'Reggae',
      coverart: 'https://i.imgur.com/eKC4XMF.jpg'
    },
    {
      posts: [],
      title: 'Alternative',
      coverart: 'https://i.imgur.com/uYjYAT9.jpg'
    },
    {
      posts: [],
      title: 'Rock',
      coverart: 'https://i.imgur.com/uQ5lEEb.jpg'
    },
    {
      posts: [],
      title: 'Hip Hop',
      coverart: 'https://i.imgur.com/t1TgK8q.jpg'
    },
    {
      posts: [],
      title: 'Indie',
      coverart: 'https://i.imgur.com/47NZOm9.jpg'
    },
    {
      posts: [],
      title: 'Instrumental',
      coverart: 'https://i.imgur.com/AreyrIQ.jpg'
    },
    {
      posts: [],
      title: 'Pop',
      coverart: 'https://i.imgur.com/mhGsSqG.jpg'
    },
    {
      posts: [],
      title: 'Workout',
      coverart: 'https://i.imgur.com/L3q0wVe.jpg'
    },
    {
      posts: [],
      title: 'Focus',
      coverart: 'https://i.imgur.com/u6MmpB6.jpg'
    },
    {
      posts: [],
      title: 'The Mood',
      coverart: 'https://i.imgur.com/1dPyAUq.jpg'
    },
    {
      posts: [],
      title: 'De-Stress',
      coverart: 'https://i.imgur.com/ob1gZTR.jpg'
    }
  ]
}



db.Playlist.deleteMany({}, (err, deletedPlaylists)=> {
  db.Playlist.create(data.playlists, (err, seededPlaylists) => {
    if(err) console.log(err)

    console.log(data.length)

    process.exit()
  })
})

// Playlist.create(
//   {title: 'Indie', coverart: 'https://i.pinimg.com/originals/dc/75/62/dc75620a85349b109b529e0f555897ca.jpg'}, (err, createdPlay)=>{
//   if(err) console.log(err)
//   createdPlay.save()
// })