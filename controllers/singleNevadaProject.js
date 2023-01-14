const SingleNevada = require('../models/NevadaProjects');

module.exports = async (req, res) => {
    const nevada = await SingleNevada.findById(req.params.id).populate('userid');
    res.render('nevadaProject', {
        title: "Post Information",
        nevada
    })
}