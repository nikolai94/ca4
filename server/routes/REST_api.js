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
    res.end("Error: "+global.mongo_error+" To see a list of users here, make sure you have started the database and set up some test users (see model-->db.js for instructions)");
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
   /* wiki.find({title: "Abu Dhabi"}, function (err, data) {
    if (err) {
      res.status(err.status || 400);
      res.end(JSON.stringify({error: err.toString()}));
      return;
    }
    res.header("Content-type","application/json");
    res.end(JSON.stringify(data));
  });*/

});

module.exports = router;
