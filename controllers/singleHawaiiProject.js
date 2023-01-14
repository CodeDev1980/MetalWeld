const SingleHawaii = require('../models/HawaiiProjects');

module.exports = async (req, res) => {
    const hawaii = await SingleHawaii.findById(req.params.id).populate('userid');
    res.render('hawaiiProject', {
        title: "Post Information",
        hawaii
    })
}