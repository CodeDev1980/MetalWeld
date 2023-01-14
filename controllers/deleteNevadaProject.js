const DeleteNA = require('../models/NevadaProjects');

module.exports = async (req, res) => {
    await DeleteNA.findByIdAndDelete(req.params.id)
    res.redirect('/createNA')
}