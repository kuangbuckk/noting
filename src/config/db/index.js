const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

async function connect(){
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/Buck_favorite_clips_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connect successfully!');
    } catch (error){
        console.log('Connect failure!');
    }
}

module.exports = { connect };