global.TEST_DATABASE = "mongodb://localhost/TestDataBase_xx1243";
require("../../server/model/db");

var facade = require('../../server/model/facade');
var mongoose = require("mongoose");
var Wiki = mongoose.model("wiki");
var should = require("should");

var wikiOpret = [
    {"title":"'Ndrangheta","url":"http","abstract":"The Calabrian  'test.","headings":[{"heading":"Economy","position":2},{"heading":"External links","position":4},{"heading":"Origins","position":3},{"heading":"Power structure","position":1}],"links":["http://en.wikipedia.org/wiki/Apulia","http://en.wikipedia.org/wiki/Belgium"],"categories":["Crime in Italy","Mafia groups","test2"]},
    {"title":"'test","url":"http","abstract":"The Calabrian  'test.","headings":[{"heading":"Economy","position":2},{"heading":"External links","position":4},{"heading":"Origins","position":3},{"heading":"Power structure","position":1}],"links":["http://en.wikipedia.org/wiki/Apulia","http://en.wikipedia.org/wiki/Belgium"],"categories":["test2","test3"]}
];

describe ('getCategories', function(){
    beforeEach(function (done){

        Wiki.remove({}, function () {
            Wiki.create(wikiOpret, function (err, newQuotes) {


                done();
            })
        });
    });
    after(function (done) {
        //Uncomment the lines below to completely remove the test database after the tests
        if (global.TEST_DATABASE) {
            mongoose.connection.db.dropDatabase();
        }
        done();
    });


    it("should find 2 categories", function (done) {
        facade.getCategories(function(err,data)
        {
            data.length.should.equal(4);
            done();
        })

    });

    it("should find specific categori", function (done) {
        facade.getCategories(function(err,data)
        {
            data[1].should.equal("Mafia groups");
            done();
        })

    });

});

describe ('findWiki', function(){

    beforeEach(function (done){

        Wiki.remove({}, function () {

            Wiki.create(wikiOpret, function (err, newQuotes) {


                done();
            })
        });
    });
    after(function (done) {
        //Uncomment the lines below to completely remove the test database after the tests
        if (global.TEST_DATABASE) {
            mongoose.connection.db.dropDatabase();
        }
        done();
    });

    it("size should equal 1", function (done) {
        facade.findWiki("test",function(err,data)
        {
            if(err)
            {
                console.log(err);
            }
            else
            {
                data.length.should.equal(1);
            }
            done();
        })

    });

    it("size should equal 2", function (done) {
        facade.findWiki("",function(err,data)
        {
            if(err)
            {
                console.log(err);
            }
            else
            {
                data.length.should.equal(2);
            }
            done();
        })

    });



    it("should find title 'test", function (done) {
        facade.findWiki("test",function(err,data)
        {
            if(err)
            {
                console.log(err);
            }
            else
            {
            data[0].title.should.equal("'test");
            }
            done();
        })

    });

});


describe ('getWikisWithCategory', function(){

    beforeEach(function (done){

        Wiki.remove({}, function () {

            Wiki.create(wikiOpret, function (err, newQuotes) {


                done();
            })
        });
    });
    after(function (done) {
        //Uncomment the lines below to completely remove the test database after the tests
        if (global.TEST_DATABASE) {
            mongoose.connection.db.dropDatabase();
        }
        done();
    });

    it("should find 2 category with test2", function (done) {
        facade.getWikisWithCategory("test2",function(err,data)
        {
            if(err)
            {
                console.log(err);
            }
            else
            {
                data.length.should.equal(2);
            }
            done();
        })

    });


    it("should find 1 category with test3", function (done) {
        facade.getWikisWithCategory("test3",function(err,data)
        {
            if(err)
            {
                console.log(err);
            }
            else
            {
                data.length.should.equal(1);
            }
            done();
        })

    });


});

describe ('findWiki', function(){

    beforeEach(function (done){

        Wiki.remove({}, function () {

            Wiki.create(wikiOpret, function (err, newQuotes) {


                done();
            })
        });
    });
    after(function (done) {
        //Uncomment the lines below to completely remove the test database after the tests
        if (global.TEST_DATABASE) {
            mongoose.connection.db.dropDatabase();
        }
        done();
    });

    it("should find 1 with search string 'test ", function (done) {
        facade.findWiki("'test",function(err,data)
        {
            if(err)
            {
                console.log(err);
            }
            else
            {
                data.length.should.equal(1);
            }
            done();
        })

    });

    it("should find 1 with search string 'Test ", function (done) {
        facade.findWiki("'Test",function(err,data)
        {
            if(err)
            {
                console.log(err);
            }
            else
            {
                data.length.should.equal(1);
            }
            done();
        })

    });

});
