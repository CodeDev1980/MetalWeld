const ArizonaPost = require('../models/ArizonaProjects');

module.exports = async (req, res) => {
    const arizonaFeeds = await ArizonaPost.find({}).sort({_id: -1}).populate('userid');
    res.render('Arizona', {
        title: "Arizona Projects Page",
        arizonaFeeds
    })
}