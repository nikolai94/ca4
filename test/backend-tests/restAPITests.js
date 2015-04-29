global.TEST_DATABASE = "mongodb://localhost/TestDataBase_xx1243"
require("../../server/model/db");

var should = require("should");
var app = require("../../server/app");
var http = require("http");
var facade = require('../../server/model/facade');
var mongoose = require("mongoose");
var Wiki = mongoose.model("wiki");



var wikiOpret = [
    {title: "TestNavn", url: "http://",abstract :"abstracs1",categories : ["programming"],links:["http://www.s.com"], headings:["something"]},
    {title: "TestNavn2", url: "http://",abstract :"abstract2",categories : ["football"],links:["http://www.f.com"], headings:["something else"]}
];

describe ('Wiki', function(){

    beforeEach(function (done){
        Wiki.remove({}, function () {
            Wiki.create(wikiOpret, function (err, newQuotes) {
                if(err)
                {
                    console.log(err);
                }

            })
        });
        done();
    });
    after(function (done) {
        //Uncomment the lines below to completely remove the test database after the tests
        if (global.TEST_DATABASE) {
            mongoose.connection.db.dropDatabase();
        }
        done();
    });

    it("return en title", function (done) {
        facade.findWiki("Abraham Lincon",function (err, wikie) {
            if (err) throw err;;
            wikie.title.should.equal("Abraham Lincon");

        })
        done();
    });
    
});

//getWiki
//getCategories
//getWikiwithCategory