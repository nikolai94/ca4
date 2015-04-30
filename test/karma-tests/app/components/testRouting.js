describe('Testing routes', function() {
    describe('findWiki', function () {

        beforeEach(module('myAppRename'));

        var location, route, rootScope;
        beforeEach(inject(
            function (_$location_, _$route_, _$rootScope_, $httpBackend) {
                location = _$location_;
                route = _$route_;
                rootScope = _$rootScope_;
                $httpBackend.expectGET("findWiki/findWiki.html").respond(200, "");
            }));

        it('should load the index page', function () {
            location.path('/findwiki');
            rootScope.$digest();
            expect(route.current.controller).toBe("findWikiCtrl");
        });


    });

    describe('categories', function () {

        beforeEach(module('myAppRename'));

        var location, route, rootScope;
        beforeEach(inject(
            function (_$location_, _$route_, _$rootScope_, $httpBackend) {
                location = _$location_;
                route = _$route_;
                rootScope = _$rootScope_;
                $httpBackend.expectGET("categories/index.html").respond(200, "");
            }));

        it('should load the index page', function () {
            location.path('/categories');
            rootScope.$digest();
            expect(route.current.controller).toBe("categories");
        });


    });

    describe('searchWikis2', function () {

        beforeEach(module('myAppRename'));

        var location, route, rootScope;
        beforeEach(inject(
            function (_$location_, _$route_, _$rootScope_, $httpBackend) {
                location = _$location_;
                route = _$route_;
                rootScope = _$rootScope_;
                $httpBackend.expectGET("searchWikis2/index.html").respond(200, "");
            }));

        it('should load the index page', function () {
            location.path('/searchWikis2');
            rootScope.$digest();
            expect(route.current.controller).toBe("searchWikis2");
        });


    });

    describe('wiki', function () {

        beforeEach(module('myAppRename'));

        var location, route, rootScope;
        beforeEach(inject(
            function (_$location_, _$route_, _$rootScope_, $httpBackend) {
                location = _$location_;
                route = _$route_;
                rootScope = _$rootScope_;
                $httpBackend.expectGET("findWiki/wiki.html").respond(200, "");
            }));

        it('should load the index page', function () {
            location.path('/wiki/Java');
            rootScope.$digest();
            expect(route.current.controller).toBe("wiki");
        });


    });

});