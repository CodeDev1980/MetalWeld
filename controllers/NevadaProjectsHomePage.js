const NevadaPost = require('../models/NevadaProjects');

module.exports = async (req, res) => {
    const nevadaFeeds = await NevadaPost.find({}).sort({_id: -1}).populate('userid');
    res.render('Nevada', {
        title: "Nevada Projects Page",
        nevadaFeeds
    })
}