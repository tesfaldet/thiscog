var AddView = require('../../src/views/add.js'),
    $ = require('jquery');

describe('view:add', function() {
    var addView = new AddView();

    beforeEach(function() {
        spyOn(addView, 'save');
    });

    it('should have a save function', function() {
        expect(addView.save).toBeDefined();
    });
});
