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
	});
}