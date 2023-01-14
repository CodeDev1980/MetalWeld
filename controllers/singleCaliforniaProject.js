const SingleCalifornia = require('../models/CaliforniaProjects');

module.exports = async (req, res) => {
    const california = await SingleCalifornia.findById(req.params.id).populate('userid');
    res.render('californiaProject', {
        title: "Post Information",
        california
    })
}