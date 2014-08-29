var Marionette = require('backbone.marionette'),
	AlbumsView = require('./views/albums'),
	AlbumDetailsView = require('./views/album_details'),
	AddAlbumView = require('./views/add');

module.exports = Controller = Marionette.Controller.extend({
	initialize: function() {
		App.core.vent.trigger('app:log', 'Controller: Initializing');
		window.App.views.albumsView = new AlbumsView({ collection: window.App.data.albums });
	},

	home: function() {
		App.core.vent.trigger('app:log', 'Controller: "Home" route hit.');
		var view = window.App.views.albumsView;
		this.renderView(view);
		window.App.router.navigate('#');
	},

	details: function(id) {
		App.core.vent.trigger('app:log', 'Controller: "Album Details" route hit (' + id + ').');
		var view = new AlbumDetailsView({ model: window.App.data.albums.get(id) });
		this.renderView(view);
		window.App.router.navigate('details/' + id);
	},

	add: function() {
		App.core.vent.trigger('app:log', 'Controller: "Add Album" route hit.');
		var view = new AddAlbumView();
		this.renderView(view);
		window.App.router.navigate('add');
	},

	renderView: function(view) {
		this.destroyCurrentView(view);
		App.core.vent.trigger('app:log', 'Controller: Rendering new view');
		$('#js-thiscog-app').html(view.render().el);
	},

	destroyCurrentView: function(view) {
		if (!_.isUndefined(window.App.views.currentView)) {
			App.core.vent.trigger('app:log', 'Controller: Destroying existing view.');
			window.App.views.currentView.close();
		}
		window.App.views.currentView = view;
	}
});