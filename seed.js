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
  ],
  "posts": [{
    "songId": "2SAqBLGA283SUiwJ3xOUVI",
    "songName": "Laugh Now Cry Later (feat. Lil Durk)",
    "albumName": "Laugh Now Cry Later (feat. Lil Durk)",
    "albumArt": "https://i.scdn.co/image/ab67616d0000485152c75ed37313b889447011ef",
    "artist": "Drake",
    "user": "Larry",
    "__v": 0
  }, {
    "songId": "02kDW379Yfd5PzW5A6vuGt",
    "songName": "Lemonade",
    "albumName": "Lemonade (feat. Gunna, Don Toliver & NAV)",
    "albumArt": "https://i.scdn.co/image/ab67616d00004851d46a8fffbe6c8630784f04da",
    "artist": "Internet Money",
    "user": "Larry",
    "__v": 0
  }, {
    "songId": "0PvFJmanyNQMseIFrU708S",
    "songName": "For The Night (feat. Lil Baby & DaBaby)",
    "albumName": "Shoot For The Stars Aim For The Moon",
    "albumArt": "https://i.scdn.co/image/ab67616d0000485177ada0863603903f57b34369",
    "artist": "Pop Smoke",
    "user": "Evan",
    "__v": 0
  }, {
    "songId": "0qJeyYAgv6UpvewUxRXAhb",
    "songName": "Rags2Riches 2 (feat. Lil Baby)",
    "albumName": "Pray 4 Love (Deluxe)",
    "albumArt": "https://i.scdn.co/image/ab67616d0000485122ff91d8f39712b1c63bb0d4",
    "artist": "Rod Wave",
    "user": "Seth",
    "__v": 0
  }, {
    "songId": "7MRCoIgpn1if1BcH9QpI9G",
    "songName": "Deep Reverence (feat. Nipsey Hussle)",
    "albumName": "Deep Reverence",
    "albumArt": "https://i.scdn.co/image/ab67616d00004851813bbed17252814fe3816387",
    "artist": "Big Sean",
    "user": "Seth",
    "__v": 0
  }, {
    "songId": "1JY6B9ILvmRla2IKKRZvnH",
    "songName": "Sad Machine",
    "albumName": "Worlds",
    "artist": "Porter Robinson",
    "user": "Seth J",
    "albumArt": "https://i.scdn.co/image/ab67616d0000b2731f675e7b8bae408653346dd9",
    "__v": 0
  }, {
    "songId": "5t3Vk8bRKylx4fjj7qlbib",
    "songName": "bitches broken hearts",
    "albumName": "bitches broken hearts",
    "artist": "Billie Eilish",
    "user": "Evan Doherty",
    "albumArt": "https://i.scdn.co/image/ab67616d0000b273408b5dbd24ad9f44bb1af72f",
    "__v": 0
  }, {
    "songId": "0NTMtAO2BV4tnGvw9EgBVq",
    "songName": "Bitch Better Have My Money",
    "albumName": "Bitch Better Have My Money",
    "artist": "Rihanna",
    "user": "Evan Doherty",
    "albumArt": "https://i.scdn.co/image/ab67616d0000b273c137319751a89295f921cce8",
    "__v": 0
  }, {
    "songId": "3i6qNxyVgIdUZTTi5m25EM",
    "songName": "Bitch",
    "albumName": "Blurring The Edges",
    "artist": "Meredith Brooks",
    "user": "Evan Doherty",
    "albumArt": "https://i.scdn.co/image/ab67616d0000b2737a8ebb7a3a8c0cadc4490cb4",
    "__v": 0
  }, {
    "songId": "18cCBvygH6yEFDY0cYN3wT",
    "songName": "Divinity",
    "albumName": "Worlds",
    "artist": "Porter Robinson",
    "user": "Seth J",
    "albumArt": "https://i.scdn.co/image/ab67616d0000b2731f675e7b8bae408653346dd9",
    "__v": 0
  }, {
    "songId": "2CgOd0Lj5MuvOqzqdaAXtS",
    "songName": "Shelter",
    "albumName": "Shelter",
    "artist": "Porter Robinson",
    "user": "Evan Doherty",
    "albumArt": "https://i.scdn.co/image/ab67616d0000b2730b4df34612f851b639959f9a",
    "__v": 0
  }, {
    "songId": "6iZVQLI9gs9kFRnmbQLzHO",
    "songName": "Something Comforting",
    "albumName": "Something Comforting",
    "artist": "Porter Robinson",
    "user": "Evan Doherty",
    "albumArt": "https://i.scdn.co/image/ab67616d0000b2734df9a24ee1827559b911efb2",
    "__v": 0
  }, {
    "songId": "7qubZ8if1MLxDuMOF9N4et",
    "songName": "Moreland Ave Blues",
    "albumName": "Big Beat Ignition: Denver",
    "artist": "Daily Bread",
    "user": "Evan Doherty",
    "albumArt": "https://i.scdn.co/image/ab67616d0000b2737296fd55301fc62773aba545",
    "__v": 0
  }, {
    "songId": "7cEkyAXkwXCxTR3IKE0XHu",
    "songName": "Children - Dream Version",
    "albumName": "Dreamland",
    "artist": "Robert Miles",
    "user": "Seth J",
    "albumArt": "https://i.scdn.co/image/ab67616d0000b273796f52837437543852f14020",
    "__v": 0
  }, {
    "songId": "2qC1sUo8xxRRqYsaYEdDuZ",
    "songName": "Awake",
    "albumName": "Awake",
    "artist": "Tycho",
    "user": "Seth J",
    "albumArt": "https://i.scdn.co/image/ab67616d0000b27344f450eee039b69359699765",
    "__v": 0
  }, {
    "songId": "6koWevx9MqN6efQ6qreIbm",
    "songName": "A Walk",
    "albumName": "Dive",
    "artist": "Tycho",
    "user": "Seth J",
    "albumArt": "https://i.scdn.co/image/ab67616d0000b2736ce6bb858321ae9bbd66d7a2",
    "__v": 0
  }, {
    "songId": "4BFBElI73LzkLOBru4TKVv",
    "songName": "Is She With You? - Wonder Woman Theme",
    "albumName": "Batman v Superman: Dawn Of Justice (Original Motion Picture Soundtrack) [Deluxe]",
    "artist": "Hans Zimmer",
    "user": "Seth J",
    "albumArt": "https://i.scdn.co/image/ab67616d0000b2734af9ebce547254088c9b8e1e",
    "__v": 0
  }, {
    "songId": "4NYvpgJmjjwuykAOmWg9Ku",
    "songName": "Que Pasa (ASOT 977) [Tune Of The Week]",
    "albumName": "ASOT 977 - A State Of Trance Episode 977 (Including A State Of Trance Classics - Mix 010: Alex M.O.R.P.H.)",
    "artist": "Armin van Buuren",
    "user": "Seth J",
    "albumArt": "https://i.scdn.co/image/ab67616d0000b273c761f2bd279f77c099f08263",
    "__v": 0
  }, {
    "songId": "35cWnQKyLjmzkq81M51D9n",
    "songName": "World on Fire (feat. Slightly Stoopid)",
    "albumName": "World on Fire",
    "artist": "Stick Figure",
    "user": "Evan Doherty",
    "albumArt": "https://i.scdn.co/image/ab67616d0000b27340d3b5cb260b1e7321c58b6d",
    "__v": 0
  }, {
    "songId": "4zZi9Xjn1HeCRhRddUP4bo",
    "songName": "Moana: You're Welcome",
    "albumName": "Moana: You're Welcome",
    "artist": "Geek Music",
    "user": "Seth J",
    "albumArt": "https://i.scdn.co/image/ab67616d0000b2737eda7809c5babddebad2df87",
    "__v": 0
  }, {
    "songId": "0wYVNC09iLBVIqHB07Hckt",
    "songName": "Ecstasy",
    "albumName": "No Silence",
    "artist": "ATB",
    "user": "Seth J",
    "albumArt": "https://i.scdn.co/image/ab67616d0000b273b9b66171f4f9a73d328c057c",
    "__v": 0
  }, {
    "songId": "4ta97KyyCWLCQAAFtOWFpy",
    "songName": "Language",
    "albumName": "Language",
    "artist": "Porter Robinson",
    "user": "Seth J",
    "albumArt": "https://i.scdn.co/image/ab67616d0000b273e410a527c6720dcabeec8676",
    "__v": 0
  }, {
    "songId": "1UL8GkVAs6UcWF6BZ3DYZt",
    "songName": "Closer to the Sun",
    "albumName": "Closer to the Sun",
    "artist": "Slightly Stoopid",
    "user": "Evan Doherty",
    "albumArt": "https://i.scdn.co/image/ab67616d0000b2736d07ac77f37c4e83f2d19972",
    "__v": 0
  }, {
    "songId": "4cs6ORX8aKd6rtVdwAnnel",
    "songName": "2am",
    "albumName": "Chronchitis",
    "artist": "Slightly Stoopid",
    "user": "Evan Doherty",
    "albumArt": "https://i.scdn.co/image/ab67616d0000b273dc1886ac54cb45a8843404d7",
    "__v": 0
  }, {
    "songId": "5UMC0HkqpmwarA1HZ7z3Ck",
    "songName": "Pachuca Sunrise",
    "albumName": "Menos El Oso",
    "artist": "Minus the Bear",
    "user": "Evan Doherty",
    "albumArt": "https://i.scdn.co/image/ab67616d0000b273aff6b35992c7cb120f11a40d",
    "__v": 0
  }, {
    "songId": "5X3vqUvHDIKQUp60prOkcs",
    "songName": "Dusty Bugs",
    "albumName": "Dusty Bugs",
    "artist": "Opiuo",
    "user": "Evan Doherty",
    "albumArt": "https://i.scdn.co/image/ab67616d0000b273a19b7bce98d3f3ec7c2b73f2",
    "__v": 0
  }, {
    "songId": "1L94M3KIu7QluZe63g64rv",
    "songName": "Alive",
    "albumName": "Ten",
    "artist": "Pearl Jam",
    "user": "Evan Doherty",
    "albumArt": "https://i.scdn.co/image/ab67616d0000b273d400d27cba05bb0545533864",
    "__v": 0
  }, {
    "songId": "1ONJ7SEsveLTcJkPbWpBmq",
    "songName": "Play Pretend",
    "albumName": "Play Pretend",
    "artist": "Kasbo",
    "user": "Evan Doherty",
    "albumArt": "https://i.scdn.co/image/ab67616d0000b2731de840e4d46657f299c941a2",
    "__v": 0
  }, {
    "songId": "5ZwP9znDfvsOxs2lTARAS2",
    "songName": "Get Up N Go",
    "albumName": "Get Up N Go",
    "artist": "The Funk Hunters",
    "user": "Evan Doherty",
    "albumArt": "https://i.scdn.co/image/ab67616d0000b273fd66b7c6aafc7c29c2d5dd52",
    "__v": 0
  }, {
    "songId": "0ttmJBtByTLRgSKa56BJGG",
    "songName": "Let Go",
    "albumName": "Let Go",
    "artist": "Galimatias",
    "user": "Evan Doherty",
    "albumArt": "https://i.scdn.co/image/ab67616d0000b2733e384f7957c046612299dd0f",
    "__v": 0
  }, {
    "songId": "0QkWubamAKEvvcOTriSKX3",
    "songName": "Summer Nights",
    "albumName": "Summer Nights",
    "artist": "Iration",
    "user": "Evan Doherty",
    "albumArt": "https://i.scdn.co/image/ab67616d0000b273a6fa12933853bd89255acb9d",
    "__v": 0
  }, {
    "songId": "0KtKac3tvjeGjg6FXcUy7X",
    "songName": "Time Bomb",
    "albumName": "Time Bomb",
    "artist": "Iration",
    "user": "Evan Doherty",
    "albumArt": "https://i.scdn.co/image/ab67616d0000b273507687db42c3a9ac52d6ff8c",
    "__v": 0
  }, {
    "songId": "2tP2rytUFVm6lhCznfLbv6",
    "songName": "Falling",
    "albumName": "Time Bomb",
    "artist": "Iration",
    "user": "Evan Doherty",
    "albumArt": "https://i.scdn.co/image/ab67616d0000b273507687db42c3a9ac52d6ff8c",
    "__v": 0
  }, {
    "songId": "3W4x7fZhMHw2pE6wyBzzF8",
    "songName": "Weight of Sound",
    "albumName": "Burial Ground",
    "artist": "Stick Figure",
    "user": "Evan Doherty",
    "albumArt": "https://i.scdn.co/image/ab67616d0000b273d05956a2233c7be9340ae85b",
    "__v": 0
  }, {
    "songId": "5EeNRe6Fi29tTrssVzl4dw",
    "songName": "Epoch",
    "albumName": "Epoch",
    "artist": "Tycho",
    "user": "Seth J",
    "albumArt": "https://i.scdn.co/image/ab67616d0000b2735d91c6e082aa6f4d2a871e53",
    "__v": 0
  }, {
    "songId": "6A9mKXlFRPMPem6ygQSt7z",
    "songName": "Three Little Birds",
    "albumName": "Exodus (Deluxe Edition)",
    "artist": "Bob Marley & The Wailers",
    "user": "Seth J",
    "albumArt": "https://i.scdn.co/image/ab67616d0000b273420b2459f35e0fc98bcab288",
    "__v": 0
  }, {
    "songId": "2Ob2E0owyR8gdF0YGf0fZp",
    "songName": "Joypunks",
    "albumName": "Superdream",
    "artist": "Big Wild",
    "user": "Evan Doherty",
    "albumArt": "https://i.scdn.co/image/ab67616d0000b273da45750734ba67831abf4f76",
    "__v": 0
  }, {
    "songId": "6nz35DNIzbtj5ztpDEcW1j",
    "songName": "Kick, Push",
    "albumName": "Lupe Fiasco's Food & Liquor",
    "artist": "Lupe Fiasco",
    "user": "Larry Talisic",
    "albumArt": "https://i.scdn.co/image/ab67616d0000b273a81ec0503c55850ad4687940",
    "__v": 0
  }]
}


const seedDb = async () => {
  try {
    await db.Playlist.deleteMany({})
    console.log('removed all playlists');
    const playlists = await db.Playlist.create(data.playlists)
    console.log(`created ${playlists.length} playlists`)

    await db.Post.deleteMany({})
    console.log('removed all posts');
    // const posts = await db.Posts.create(data.posts)
    // console.log(`created ${posts.length} posts`);

    process.exit()
  } catch (error) {
    console.log(error)
  }
}

seedDb()
// db.Playlist.deleteMany({}, (err, deletedPlaylists)=> {
//   db.Playlist.create(data.playlists, (err, seededPlaylists) => {
//     if(err) console.log(err)

//     console.log(data.length)

//     process.exit()
//   })
// })

// Playlist.create(
//   {title: 'Indie', coverart: 'https://i.pinimg.com/originals/dc/75/62/dc75620a85349b109b529e0f555897ca.jpg'}, (err, createdPlay)=>{
//   if(err) console.log(err)
//   createdPlay.save()
// })