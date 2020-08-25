require('dotenv').config()
const db = require('./models')

const data = {
  "playlists": [
    {
      title: 'Electronic',
      coverart: 'https://d111vui60acwyt.cloudfront.net/product_photos/62756034/file_587b13b8a7_original.jpg'
    },
    {
      title: 'Reggae',
      coverart: 'https://i.ytimg.com/vi/HJqe19HadbU/maxresdefault.jpg'
    },
    {
      title: 'Alternative',
      coverart: 'https://media.pri.org/s3fs-public/styles/story_main/public/mexico-rock-caifanes-coachella-2011-05-16.jpg?itok=_I0WKY9G'
    },
    {
      title: 'Rock',
      coverart: 'https://static.wixstatic.com/media/e74c2e_30d0519dafc44ee3b72f2099cb6cbe3c~mv2.jpg'
    },
    {
      title: 'Hip Hop',
      coverart: 'https://static.billboard.com/files/media/2018-decade-end-rap-2019-billboard-fea-1500-1024x577.jpg'
    },
    {
      title: 'Indie',
      coverart: 'https://www.lifewire.com/thmb/lhOScswjRq7jhEKIeJXCIupl2_0=/1733x1155/filters:fill(auto,1)/Stocksy_txpd6b8add2bdn100_Medium_401487-5a553389eb4d52003732b41f.jpg'
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