const DeleteAZ = require('../models/ArizonaProjects');

module.exports = async (req, res) => {
    await DeleteAZ.findByIdAndDelete(req.params.id)
    res.redirect('/createAZ')
}