var proxyquire = require('proxyquire'),
    modelsStub = {},
    contacts = proxyquire('../../controllers/albums', {
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
});