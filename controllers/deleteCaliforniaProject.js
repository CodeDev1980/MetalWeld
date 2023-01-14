const DeleteCA = require('../models/CaliforniaProjects');

module.exports = async (req, res) => {
    await DeleteCA.findByIdAndDelete(req.params.id)
    res.redirect('/createCA')
}