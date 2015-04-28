var mongoose = require('mongoose');
var wiki = mongoose.model('wiki');

function getWiki(title,callback){
    wiki.find({title: title}, function (err, data) {
        if (err) {
            return callback(err);
        }
        return callback(null,data);
    });
}

module.exports = {
    getWiki: getWiki
}