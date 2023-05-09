const newsRouter = require('./news');
const clipsRouter = require('./clips');
const siteRouter = require('./site');
const meRouter = require('./me');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/clips', clipsRouter); //1: chọc vào dir clips
    app.use('/me', meRouter)
    app.use('search', siteRouter);
    app.use('/', siteRouter);
}

module.exports = route;
