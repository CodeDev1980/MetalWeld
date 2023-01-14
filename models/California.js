const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CaliforniaSchema = new Schema ({
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

const California = mongoose.model('California', CaliforniaSchema)
module.exports = California