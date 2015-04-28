var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var wiki = mongoose.model('wiki');
var facade = require("../model/facade");

/* GET A User From The DataBase */
router.get('/wiki/:title', function(req, res) {
    var title = req.params.title;
  if(typeof global.mongo_error !== "undefined"){
    res.status(500);
    res.end("Error:");
    return;
  }
    facade.getWiki(title,function(err,result){
       if(err){
           res.status(err.status || 400);
           res.end(JSON.stringify({error: err.toString()}));
           return;
       }
        res.header("Content-type","application/json");
        res.end(JSON.stringify(result));

    });
});



router.get('/findWiki/:title', function(req, res) {
    var title = req.params.title;
    if(typeof global.mongo_error !== "undefined"){
        res.status(500);
        res.end("Error:");
        return;
    }
    facade.findWiki(title,function(err,result){
        if(err){
            res.status(err.status || 400);
            res.end(JSON.stringify({error: err.toString()}));
            return;
        }
        res.header("Content-type","application/json");
        res.end(JSON.stringify(result));

    });
});

module.exports = router;
