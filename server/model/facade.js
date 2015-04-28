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


function findWiki(title,callback){
    wiki.find({title: new RegExp(title, 'i')}, function (err, data) {
        if (err) {
            return callback(err);
        }
        return callback(null,data);
    });
}

console.log("test commit");
module.exports = {
    getWiki: getWiki,
    findWiki : findWiki
}
