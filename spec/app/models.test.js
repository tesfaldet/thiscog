/* jshint -W030 */
var models = require('../../app/models');

describe('Models', function() {

    describe('Album', function() {
        var schema = models.Album.schema.paths;

        it('should exist', function() {
            expect(models.Album).to.exist;
        });

        it('should have artist string field', function() {
            expect(schema.artist).to.exist;
            expect(schema.artist.instance).to.equal('String');
        });

        it('should have title string field', function() {
            expect(schema.title).to.exist;
            expect(schema.title.instance).to.equal('String');
        });

        it('should have year string field', function() {
            expect(schema.year).to.exist;
            expect(schema.year.instance).to.equal('String');
        });

        it('should have genre string field', function() {
            expect(schema.genre).to.exist;
            expect(schema.genre.instance).to.equal('String');
        });

        it('should have cover fields', function() {
            expect(schema['cover.data']).to.exist;
            expect(schema['cover.data'].instance).to.equal('String');
            expect(schema['cover.contentType']).to.exist;
            expect(schema['cover.contentType'].instance).to.equal('String');
        });
    });
});
