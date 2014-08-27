var Marionette = require('backbone.marionette');

module.exports = AddView = Marionette.ItemView.extend({
	template: require('../../templates/add.hbs'),
	events: {
		'click a.save-button': 'save'
	},

	save: function(e) {
		e.preventDefault();
		var newAlbum = {
			artist: this.$el.find('#artist').val(),
			title: this.$el.find('#title').val(),
			year: this.$el.find('#year').val(),
			genre: this.$el.find('#genre').val()

		};

		window.App.data.albums.create(newAlbum);
		window.App.core.vent.trigger('app:log', 'Add View: Saved new album!');
		window.App.controller.home();
	}
});