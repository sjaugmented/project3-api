require('dotenv').config()
const db = require('./models')

const data = {
  "playlists": [
    {
      posts: ['5f45fd42138eeb46e4751121'],
      title: 'Electronic',
      coverart: 'https://i.imgur.com/gSGz5QE.jpg'
    },
    {
      posts: ['5f45fd42138eeb46e4751122'],
      title: 'Reggae',
      coverart: 'https://i.imgur.com/eKC4XMF.jpg'
    },
    {
      posts: ['5f45fd42138eeb46e4751123'],
      title: 'Alternative',
      coverart: 'https://i.imgur.com/uYjYAT9.jpg'
    },
    {
      posts: ['5f45fd42138eeb46e4751124'],
      title: 'Rock',
      coverart: 'https://i.imgur.com/uQ5lEEb.jpg'
    },
    {
      posts: ['5f45fd42138eeb46e4751125'],
      title: 'Hip Hop',
      coverart: 'https://i.imgur.com/t1TgK8q.jpg'
    },
    {
      posts: ['5f45fd42138eeb46e4751126'],
      title: 'Indie',
      coverart: 'https://i.imgur.com/47NZOm9.jpg'
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