const db = require('./models')

const data = {
  "playlists": [
  {
    title: 'Electronic',
    coverart: 'https://graphicriver.img.customer.envatousercontent.com/files/254513373/albumcover-artwork-templates-bundle3-preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=369a30083246bb801ee4d196f43ec4ce'
  },
  {
    title: 'Alternative',
    coverart: 'https://ontheaside.com/wp-content/uploads/2017/11/nirvananevrmine.jpg'
  },
  {
    title: 'Rock',
    coverart: 'https://c.wallhere.com/photos/41/fd/metal_music_heavy_metal_heavymetal_rock_music_rock_metal_cover_art_album_covers-1405771.jpg!d'
  },
  {
    title: 'Hip Hop',
    coverart: 'https://d279m997dpfwgl.cloudfront.net/wp/2018/12/JColeKOD.jpg'
  },
  {
    title: 'Indie',
    coverart: 'https://i.pinimg.com/originals/dc/75/62/dc75620a85349b109b529e0f555897ca.jpg'
  },
  {
    title: 'Reggae',
    coverart: 'https://is4-ssl.mzstatic.com/image/thumb/Music5/v4/51/05/df/5105df02-c4e8-484f-0cba-4cdc12a0e35a/source/1200x1200bb.jpg'
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