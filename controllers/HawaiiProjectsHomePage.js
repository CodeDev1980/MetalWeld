const HawaiiPost = require('../models/HawaiiProjects');

module.exports = async (req, res) => {
    const hawaiiFeeds = await HawaiiPost.find({}).sort({_id: -1}).populate('userid');
    res.render('Hawaii', {
        title: "Hawaii Projects Page",
        hawaiiFeeds
    })
}