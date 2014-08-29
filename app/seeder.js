var mongoose = require('mongoose'),
    models = require('./models'),
    fs = require('fs');

module.exports = {
    check: function() {
        models.Album.find({}, function(err, albums) {
            if (albums.length === 0) {
                console.log('no albums found, seeding...');
                var newAlbum = new models.Album({
                    artist: 'Tame Impala',
                    title: 'InnerSpeaker',
                    year: '2010',
                    genre: 'Psych-rock',
                    cover: {
                        data: fs.readFileSync(__dirname + '/../images/Innerspeaker.jpg'),
                        contentType: 'image/jpg'
                    }
                });
                newAlbum.save(function(err, album) {
                    console.log('successfully inserted album: ' + album._id);
                });

                newAlbum = new models.Album({
                    artist: 'Tame Impala',
                    title: 'Lonerism',
                    year: '2012',
                    genre: 'Psych-rock',
                    cover: {
                        data: fs.readFileSync(__dirname + '/../images/Lonerism.jpeg'),
                        contentType: 'image/jpg'
                    }
                });
                newAlbum.save(function(err, album) {
                    console.log('successfully inserted album: ' + album._id);
                });

                newAlbum = new models.Album({
                    artist: 'St. Lucia',
                    title: 'When The Night',
                    year: '2013',
                    genre: 'Indietronica',
                    cover: {
                        data: fs.readFileSync(__dirname + '/../images/WhenTheNight.jpg'),
                        contentType: 'image/jpg'
                    }
                });
                newAlbum.save(function(err, album) {
                    console.log('successfully inserted album: ' + album._id);
                });
            } else {
                console.log('found ' + albums.length + ' existing albums!');
            }
        });
    }
};
