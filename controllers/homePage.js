const BlogPost = require('../models/BlogPost');
const ReviewsPost = require('../models/Reviews');
const ArizonaPost = require('../models/ArizonaProjects');
const CaliforniaPost = require('../models/CaliforniaProjects');
const HawaiiPost = require('../models/HawaiiProjects');
const NevadaPost = require('../models/NevadaProjects');

module.exports = async (req, res) => {
    const articles = await BlogPost.find({}).limit(4).sort({_id: -1}).populate('userid');
    const reviews = await ReviewsPost.find({}).limit(3).sort({_id: -1});
    const arizona = await ArizonaPost.find({}).limit(1).sort({_id: -1});
    const california = await CaliforniaPost.find({}).limit(1).sort({_id: -1});
    const hawaii = await HawaiiPost.find({}).limit(1).sort({_id: -1});
    const nevada = await NevadaPost.find({}).limit(1).sort({_id: -1});
    res.render('index', {
        title: "Home Page",
        articles, reviews, arizona, california, hawaii, nevada
    })
}