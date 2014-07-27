var proxyquire = require('proxyquire'),
    modelsStub = {},
    albums = proxyquire('../../controllers/albums', {
        '../app/models' : modelsStub
    });

var res = {},
    req = {};

describe('Albums Controller', function() {
    beforeEach(function() {
        res = {
            json: sinon.spy()
        };
        req = {
            params: {
                id : 1
            }
        };
        modelsStub.Album = {
            find: function(query, callback) {
                callback(null, {});
            },
            save: function(err, callback) {
                callback(null, req.body);
            }
        };
    });

    it('should exist', function() {
        expect(albums).to.exist;
    });

    describe('index', function() {
        it('should be defined', function() {
            expect(albums.index).to.be.a('function');
        });

        it('should send json', function() {
            albums.index(req, res);
            expect(res.json).calledOnce;
        });
    });

    describe('getById', function() {
        it('should be defined', function() {
            expect(albums.getById).to.be.a('function');
        });

        it('should send json on successful retrieve', function() {
            albums.getById(req, res);
            expect(res.json).calledOnce;
        });

        it('should send json error on error', function() {
            modelsStub.Album = {
                find: function(query, callback) {
                    callback(null, {error: 'Album not found.'});
                }
            };
            albums.getById(req, res);
            expect(res.json).calledWith({error: 'Album not found.'});
        });
    });

    describe('add', function() {
        beforeEach(function() {
            req.body = {
                artist: 'testArtist',
                title: 'testTitle',
                year: 'testYear',
                genre: 'testGenre',
                cover: new Buffer(1)
            }
        });

        it('should be defined', function() {
            expect(albums.add).to.be.a('function');
        });

        it('should return json on save', function() {
            modelsStub.Album = sinon.spy(function() {
                modelsStub.Album.prototype.save = function(callback) {
                    callback(null, req.body);
                };
                return;
            });
            albums.add(req, res);
            expect(res.json).calledWith(req.body);
        });

        it('should return error on failed save', function() {
            modelsStub.Album = sinon.spy(function() {
                modelsStub.Album.prototype.save = function(callback) {
                    callback({}, req.body);
                };
                return;
            });
            albums.add(req, res);
            expect(res.json).calledWith({error: 'Error adding album.'});
        });
    });

    describe('delete', function() {
        beforeEach(function() {
            req.body = {
                id: '1',
                artist: 'testArtist',
                title: 'testTitle',
                year: 'testYear',
                genre: 'testGenre',
                cover: new Buffer(1)
            };
        });

        it('should be defined', function() {
            expect(albums.delete).to.be.a('function');
        });

        it('should return json on delete', function() {
            var albumSpy = { remove: sinon.spy() };
            modelsStub.Album = {
                findOne: function(query, callback) {
                    callback(null, albumSpy);
                }
            };
            albums.delete(req, res);
            expect(albumSpy.remove).calledOnce;
        });

        it('should return error on failed delete', function() {
            modelsStub.Album = {
                findOne: function(query, callback) {
                    callback({}, {});
                }
            };
            albums.delete(req, res);
            expect(res.json).calledWith({error: 'Album not found.'});
        });
    });
});