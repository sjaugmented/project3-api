const db = require('../models')
const show = async (req, res) => {
    try {
        const foundUser = await db.User.findOne(req.body.name)
            .populate('posts')
        console.log("User:", foundUser)
        if (!foundUser) return res.json({
            message: 'none found'
        })
        await res.json({
            User: foundUser
        })
    } catch (error) {
        console.log(error)
    }
}
module.exports = show