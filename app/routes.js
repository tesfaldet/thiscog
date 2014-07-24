var home = require('../controllers/home'),
    albums = require('../controllers/albums');

module.exports.initialize = function(app) {
    app.get('/', home.index);
    app.get('/api/albums', albums.index);
    app.get('/api/albums/:id', albums.getById);
    app.post('/api/albums', albums.add);
    app.delete('/api/albums/:id', albums.delete);
};
