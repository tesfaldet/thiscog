var Marionette = require('backbone.marionette');

module.exports = AddView = Marionette.ItemView.extend({
	template: require('../../templates/add.hbs'),
	events: {
		'click a.save-button': 'save',
		'change #cover': 'viewThumbnail'
	},

	save: function(e) {
		e.preventDefault();
		var preview = this.$el.find('#preview').attr('src').split(',');
		var previewData = preview[1];
		var previewType = preview[0].match(/image\/\w+/g)[0];
		var newAlbum = {
			artist: this.$el.find('#artist').val(),
			title: this.$el.find('#title').val(),
			year: this.$el.find('#year').val(),
			genre: this.$el.find('#genre').val(),
			cover: {
				data: previewData,
				contentType: previewType
			}
		};
		console.log(newAlbum);
		//window.App.data.albums.create(newAlbum);
		window.App.core.vent.trigger('app:log', 'Add View: Saved new album!');
		//window.App.controller.home();
	},

	viewThumbnail: function(e) {
		e.preventDefault();
		var preview = this.$el.find('#preview');
		
		// Grab file information from memory.
		var file = this.$el.find('#cover').prop('files')[0];
		
		var reader = new FileReader();
		
		// Closure to preview the file information on reader load.
		reader.onload = (function(f) {
			return function(e) {
				preview.attr('src', reader.result);
			};
		})(file);

		// Read in image file as a data URL.
		reader.readAsDataURL(file);
	}
});