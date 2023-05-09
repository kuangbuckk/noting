const Clip = require('./models/Clip');
const {mongooseToObject, multipleMongooseToObject} = require('../../util/mongoose');

class MeController {
    //[GET] /me/stored/clips
    storedClips(req, res, next){
        Clip.find({})
            .then(clips => res.render('\me/stored-clips', {
                clips: multipleMongooseToObject(clips)
            }))
            .catch(next)
        
    }

}

module.exports = new MeController();
