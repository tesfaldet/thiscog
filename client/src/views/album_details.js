var Marionette = require('backbone.marionette');

module.exports = AlbumDetailsView = Marionette.ItemView.extend({
	template: require('../../templates/album_details.hbs'),
	events: {
		'click a.back': 'goBack',
		'click a.delete': 'deleteAlbum'
	},

	goBack: function(e) {
		e.preventDefault();
		window.App.controller.home();
	},

	deleteAlbum: function(e) {
		e.preventDefault();
		console.log('Deleting album ' + this.model.id);
		window.App.data.albums.remove(this.model);
		this.model.destroy(); // sends a DELETE to server
		window.App.controller.home();
	}
});