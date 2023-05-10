const Clip = require('./models/Clip');
const {mongooseToObject, multipleMongooseToObject} = require('../../util/mongoose');

class MeController {
    //[GET] /me/stored/clips
    storedClips(req, res, next){
        Promise.all([Clip.find({}), Clip.countDocumentsDeleted()])
            .then(([clips, deletedCount]) => res.render('\me/stored-clips', {
                deletedCount,
                clips: multipleMongooseToObject(clips)
                })
            )
            .catch(next);
    }

    //[GET] /me/bin/clips
    binClips(req, res, next){
        Clip.findDeleted({}) //find clips with delete: true
            .then(clips => res.render('\me/bin-clips', {
                clips: multipleMongooseToObject(clips)
            }))
            .catch(next)
    }
}

module.exports = new MeController();
