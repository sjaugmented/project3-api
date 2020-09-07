require('dotenv').config()
const db = require('./models')

const addUpvotes = async () => {
    try {
        const allPosts = await db.Post.find({})
        console.log(allPosts[0])
        for (let i = 0; i < allPosts.length; i++) {
            if (allPosts[i].votes < 5) {
                allPosts[i].votes += 5
                console.log('added 5 votes to', allPosts[i].songName);
                await allPosts[i].save()
                console.log('saved', allPosts[i].songName);
            }
        }
        process.exit()
    } catch (error) {
        console.log(error)
    }

}

const cullVotesAtRandom = async (num) => {
    try {
        const allPosts = await db.Post.find({})
        let songsToCull = num
        while (songsToCull > 0) {
            let i = Math.floor(Math.random() * allPosts.length)
            allPosts[i].votes = 3
            console.log(`set ${allPosts[i].songName} to 3 votes`);
            await allPosts[i].save()
            console.log(`saved ${allPosts[i].songName}`);
            songsToCull--
        }
        process.exit()
    } catch (error) {
        console.log(error);
    }
}

//addUpvotes()
cullVotesAtRandom(30)