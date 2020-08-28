const db = require('../models')

const index = async (req, res) => {
    try {
        const foundPosts = await db.Post.find({})
        if (!foundPosts.length) return await res.json({
            message: 'No posts found'
        })
        await res.json({posts: foundPosts})
    } catch (error) {
        console.log(error)
    }
}

const create = async (req, res) => {
    try {
      const data = await JSON.parse(req.body.body)
      const createdPost = await db.Post.create(data)
      const foundPlaylist = await db.Playlist.findById(req.params.id)
      
        // const foundPlaylist = await db.Playlist.findById(req.body.playlistId)
        foundPlaylist.posts.push(createdPost)
        await createdPost.save()
        await foundPlaylist.save()
        console.log('foundPlaylist>>>>', foundPlaylist)
        await res.json({post: createdPost})
    } catch (error) {
        console.log(error)
    }
}

const show = async (req, res) => {
    try {
        const foundPost = await db.Post.findById(req.params.id)
        if (!foundPost) return await res.json({
            message: 'No post with that ID'
        })
        await res.json({post: foundPost})
    } catch (error) {
        console.log(error)
    }
}

const destroy = async (req, res) => {
    try {
        const deletedPost = await db.Post.findOneAndDelete({
            songId: req.params.songId
        })
        
        if (!deletedPost) return res.json({
            message: 'No post with that ID'
        })
        
        const foundPlaylist = await db.Playlist.findOne({
            'posts': deletedPost._id
        })
        if (foundPlaylist) {
            console.log('deleting POST from PLAYLIST:', foundPlaylist.title); // TODO: remove
            await foundPlaylist.posts.remove(deletedPost)
            await foundPlaylist.save()
        }

        const foundUser = await db.User.findOne({
            'posts': deletedPost._id
        })
        if (foundUser) {
            console.log('deleting POST from USER:', foundUser.name) // TODO: remove
            foundUser.posts.remove(deletedPost)
            await foundUser.save()
        }

        await res.json({post: deletedPost})
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    index, create, show, destroy
}