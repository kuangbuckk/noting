const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Clip = new Schema({
    name: {type: String, maxLength: 255, required: true},
    description: {type: String, maxLength: 600},
    image: {type: String},
    videoId:{type:String,maxLength:255, required: true},
    slug: {type: String, slug: 'name', unique: true},
    major: {type: String, maxLength: 25},
}, {
    timestamps: true,
});

module.exports = mongoose.model('Clip', Clip);