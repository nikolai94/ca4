/*
describe('Testing Controllers', function () {

    beforeEach(module('myAppRename'));

    describe('findWikiCtrl', function() {
    var wikipages = [{"_id":"553e31994bfe0ff823930e1f","title":"Arsenal ship","url":"http://en.wikipedia.org/wiki/Arsenal_ship","abstract":"An arsenal ship is a concept for a floating missile platform, intended to have as many as five hundred vertical launch bays for mid-sized missiles, most likely cruise missiles. Such a ship would initially be controlled remotely by an Aegis Cruiser, although plans include control by AWACS aircraft such as the E-2 Hawkeye and E-3 Sentry.","headings":[{"heading":"Alternative Use Against American Forces","position":4},{"heading":"Criticism from American Point of View","position":3},{"heading":"Design","position":2},{"heading":"History","position":1},{"heading":"See also","position":5}],"links":["http://en.wikipedia.org/wiki/Congress","http://en.wikipedia.org/wiki/E-2_Hawkeye","http://en.wikipedia.org/wiki/E-3_Sentry"],"categories":[]}];
        var scope, httpBackendMock, ctrl;

        beforeEach(inject(function ($httpBackend, $rootScope, $controller) {
            httpBackendMock = $httpBackend;
            httpBackendMock.expectGET('http://localhost:3000/#/wiki/Arsenal%20ship').respond(wikipages);
            scope = $rootScope.$new();
            ctrl = $controller('findWikiCtrl', {$scope: scope});
        }));

        it("tester om den finder det samme object",function()
        {
            httpBackendMock.flush();
            expect(scope.data[0]).toEqual(wikipages);
        })
    })

})
    */