const db = require('./models')
const data = require('./postData.json')

db.Post.deleteMany({}, (err, deletedPosts) => {
    db.Post.create(data.posts, (err, seededPosts) => {
        if (err) console.log(err);

        console.log(data.posts.length, 'posts created successfully');

        process.exit()
    })
})