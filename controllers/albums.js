var models = require('../app/models');

module.exports = {
    index: function(req, res) {
        models.Album.find({}, function(err, data) {
            res.json(data);
        });
    },
    getById: function(req, res) {
        models.Album.find({ _id: req.params.id }, function(err, album) {
            if (err) {
                res.json({error: 'Album not found.'});
            } else {
                res.json(album);
            }
        });
    },
    add: function(req, res) {
        var newAlbum = new models.Album(req.body);
        newAlbum.save(function(err, album) {
            if (err) {
                res.json({error: 'Error adding album.'});
            } else {
                res.json(album);
            }
        });
    },
    delete: function(req, res) {
        models.Album.findOne({ _id: req.params.id }, function(err, album) {
            if (err) {
                res.json({error: 'Album not found.'});
            } else {
                album.remove(function(err, album){
                    res.json(200, {status: 'Success'});
                });
            }
        });
    }
};
