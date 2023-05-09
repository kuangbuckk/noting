const Clip = require('./models/Clip');
const {multipleMongooseToObject} = require('../../util/mongoose');

class SiteController {
    // [GET] /
    //Second param of [GET] method: callback function 
    home(req, res) {
        Clip.find({})
            .then(clips => {
                res.render('home', {
                    clips: multipleMongooseToObject(clips)
                })
            })
            .catch(error => next(error));
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
