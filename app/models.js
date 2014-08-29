var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var Album = new Schema({
    artist:            { type: String },
    title:             { type: String },
    year:              { type: String },
    genre:             { type: String },  
    cover: {
        data:          { type: String },
        contentType:   { type: String }
    }
});

module.exports = {
    Album: mongoose.model('Album', Album)
};