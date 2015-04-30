var should = require('should');
var request = require("request");
http://localhost:3000/api/wiki/'Ndrangheta

describe("Rest Api", function() {

    describe("GET WIKI", function() {
        it("should find 1 wiki by title:", function (done) {
            request({method: 'GET', url: "http://localhost:3000/api/wiki/'Ndrangheta", json: true}, function (err, res, body) {
                if(err) throw err;
                body.should.have.length(1);
                done();
            });
        })

        it("should find 1 wiki by with title 'Ndrangheta :", function (done) {
            request({method: 'GET', url: "http://localhost:3000/api/wiki/'Ndrangheta", json: true}, function (err, res, body) {
                if(err) throw err;
                body[0].title.should.equal("'Ndrangheta");
                done();
            });
        })
    })

    describe("Find WIKI", function() {
        it("should find 1 wiki by title arsenal:", function (done) {
            request({method: 'GET', url: "http://localhost:3000/api/findWiki/arsenal", json: true}, function (err, res, body) {
                if(err) throw err;
                body.should.have.length(1);
                done();
            });
        })

        it("should find Arsenal ship wiki by title arsenal:", function (done) {
            request({method: 'GET', url: "http://localhost:3000/api/findWiki/arsenal", json: true}, function (err, res, body) {
                if(err) throw err;
             body[0].title.should.equal("Arsenal ship");
                done();
            });
        })



        it("should find 19 wiki by title java:", function (done) {
            request({method: 'GET', url: "http://localhost:3000/api/findWiki/java", json: true}, function (err, res, body) {
                if(err) throw err;
                body.should.have.length(17);
                done();
            });
        })



    })


    describe("get Categories", function() {

        it("checking categories length:", function (done) {
            request({method: 'GET', url: "http://localhost:3000/api/getCategories", json: true}, function (err, res, body) {
                if(err) {throw err}
               body.categories.length.should.equal(13314);
                done();
            });
        })


    })

    describe("get Wikis With Category", function() {

        it("should get 6 objects:", function (done) {
            request({method: 'GET', url: "http://localhost:3000/api/getWikisWithCategory/Java%20platform", json: true}, function (err, res, body) {
                if(err) {throw err}
                body.length.should.equal(6);
                done();
            });
        })

        it("should get 1 object:", function (done) {
            request({method: 'GET', url: "http://localhost:3000/api/getWikisWithCategory/Ajax%20Amsterdam%20footballers", json: true}, function (err, res, body) {
                if(err) {throw err}
                body.length.should.equal(1);
                done();
            });
        })

        it("should get 1 object with title marco van basten:", function (done) {
            request({method: 'GET', url: "http://localhost:3000/api/getWikisWithCategory/Ajax%20Amsterdam%20footballers", json: true}, function (err, res, body) {
                if(err) {throw err}
                body[0].title.should.equal("Marco van Basten");
                done();
            });
        })



    })

})
