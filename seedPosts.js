const db = require('./models')
const data = require('./postsCatalogExport.json')

db.Post.deleteMany({}, (err, deletedPosts) => {
    db.Post.create(data, (err, seededPosts) => {
        if (err) console.log(err);

        console.log(data.length, 'posts created successfully');

        process.exit()
    })
})