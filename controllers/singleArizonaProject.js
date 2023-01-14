const SingleArizona = require('../models/ArizonaProjects');

module.exports = async (req, res) => {
    const arizona = await SingleArizona.findById(req.params.id).populate('userid');
    res.render('arizonaProject', {
        title: "Post Information",
        arizona
    })
}