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
});