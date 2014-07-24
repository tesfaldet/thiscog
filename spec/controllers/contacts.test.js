var proxyquire = require('proxyquire'),
    modelsStub = {},
    contacts = proxyquire('../../controllers/albums', {
        '../app/models' : modelsStub,
    });