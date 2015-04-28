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

function getCategories(callback){
    wiki.distinct('title', function (err, data) {
        if (err) {
            return callback(err);
        }
        return callback(data);
    });
}


function getWikisWithCategory(category,callback){
    wiki.find({categories: category}, function (err, data) {
        if (err) {
            return callback(err);
        }
        return callback(null,data);
    });
}



module.exports = {
    getWiki: getWiki,
    findWiki : findWiki,
    getCategories : getCategories,
    getWikisWithCategory : getWikisWithCategory
}
