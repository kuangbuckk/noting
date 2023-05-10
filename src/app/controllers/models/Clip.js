const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');



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

//Add plugin
Clip.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});
mongoose.plugin(slug);

module.exports = mongoose.model('Clip', Clip);