const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HawaiiSchema = new Schema ({
    title: String,
    details: String,
    image: String,
    location: String,
    dateFinished: String,
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    datePosted: {
        type: Date,
        default: new Date
    }
})

const Hawaii = mongoose.model('Hawaii', HawaiiSchema)
module.exports = Hawaii