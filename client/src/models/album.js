var Backbone = require('backbone');

module.exports = AlbumModel = Backbone.Model.extend({
	idAttributes: '_id';
	urlRoot: 'api/albums'
});