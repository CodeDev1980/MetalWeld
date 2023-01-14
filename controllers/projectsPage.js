const ArizonaProject = require("../models/ArizonaProjects");
const CaliforniaProject = require("../models/CaliforniaProjects");
const HawaiiProject = require("../models/HawaiiProjects");
const NevadaProject = require("../models/NevadaProjects");
module.exports = async (req, res) => {
    const arizona = await ArizonaProject.find({}).limit(1).sort({_id: -1});
    const california = await CaliforniaProject.find({}).limit(1).sort({_id: -1});
    const hawaii = await HawaiiProject.find({}).limit(1).sort({_id: -1});
    const nevada = await NevadaProject.find({}).limit(1).sort({_id: -1});
    res.render('projects', {
        title: "Gallery of Previous Work",
        arizona, california, hawaii, nevada
    })
}