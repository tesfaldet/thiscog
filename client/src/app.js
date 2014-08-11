var Marionette = require('backbone.marionette'),
    Controller = require('./controller'),
    Router = require('./router'),
    AlbumModel = require('./models/album'),
    AlbumsCollection = require('./collections/albums');

module.exports = App = function App() {};

App.prototype.start = function() {
	App.core = new Marionette.Application();

	App.core.on("initialize:before", function(options) {
		App.core.vent.trigger('app:log', 'App: Initializing');

		App.views = {};
		App.data = {};

		// load initial data
		var albums = new AlbumsCollection();
		albums.fetch({
			success: function() {
				App.data.albums = albums;
				App.core.vent.trigger('app:start');
			}
		});
	});

	App.core.vent.bind('app:start', function(options) {
		App.core.vent.trigger('app:log', 'App: Starting');
		if (Backbone.history) {
			App.controller = new Controller();
			App.router = new Router({ controller: App.controller });
			App.core.vent.trigger('app:log', 'App: Backbone.history starting');
			Backbone.history.start();
		}
	});
}