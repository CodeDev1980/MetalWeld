const CaliforniaPost = require('../models/CaliforniaProjects');

module.exports = async (req, res) => {
    const californiaFeeds = await CaliforniaPost.find({}).sort({_id: -1}).populate('userid');
    res.render('California', {
        title: "California Projects Page",
        californiaFeeds
    })
}