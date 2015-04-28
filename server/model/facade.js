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
    wiki.find({title: new RegExp(title, 'i')},'title abstract', function (err, data) {
        if (err) {
            return callback(err);
        }

        return callback(null,data);
    });
}

function getCategories(callback){
    wiki.distinct('categories', function (err, data) {
        if (err) {
            return callback(err);
        }
        return callback(null,data);
    });
}


function getWikisWithCategory(category,callback){
    wiki.find({categories: category},'title abstract', function (err, data) {
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
