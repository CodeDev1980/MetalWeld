const DeleteHA = require('../models/HawaiiProjects');

module.exports = async (req, res) => {
    await DeleteHA.findByIdAndDelete(req.params.id)
    res.redirect('/createHA')
}