const Clip = require('./models/Clip');
const {mongooseToObject} = require('../../util/mongoose');

class ClipsController {
    // [GET] /clips/:slug
    //Second param of [GET] method: callback function 
    show(req, res, next) {
        Clip.findOne({ slug: req.params.slug }).lean()
            .then(clip => 
                res.render('clips/show', { clip })
            )
            .catch(next);
    }

    //[GET] /clips/create
    create(req, res, next){
        res.render('clips/create');
    }

    //[GET] /clips/:id/edit
    edit(req, res, next){
        Clip.findById(req.params.id).lean()
            .then(clip => res.render('clips/edit', { clip }))
            .catch(next);
        
    }

    //[PUT] /clips/:id
    update(req, res, next){
        Clip.updateOne({_id: req.params.id}, req.body)
            .then(()=>res.redirect('../me/stored/clips')) //(stored/clips = stored-clip)
            .catch(next);
    }

    //3: provoke hàm
    //[DELETE] /clips/:id
    delete(req, res, next){
        Clip.deleteOne({_id: req.params.id})
            .then(()=> res.redirect('back'))
            .catch(next);
    }

    //[POST] /clips/store
    store(req, res, next){
        const formData = req.body;
        formData.image = `https://i.ytimg.com/vi/${req.body.videoId}/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBmlLd8fe-XZ6iqr7EAV7QnIJoRhQ`
        const clip = new Clip(formData);
        clip.save()
            .then(()=> res.redirect('/'))
            .catch(err => next(err))
    }
}

module.exports = new ClipsController();
