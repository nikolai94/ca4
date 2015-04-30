
describe('factories', function () {

  beforeEach(module('myAppRename.factories'));


  describe('wikiFactory', function () {
    var wikiFactory, http;
    beforeEach(inject(function (_wikiFactory_,$httpBackend) {
      wikiFactory = _wikiFactory_;
      http = $httpBackend;
      http.expectGET('/api/wiki/he').respond({text: "hej"});
    }));

    it('Should be Hej from Factory', function () {
      wikiFactory.getData("he").success(function (data) {
        console.log(data.text);
        expect(data.text).toBe("hej");
      });
      http.flush();
    });
  });

  describe('getCategories', function () {
    var getCategories, http;
    beforeEach(inject(function (_getCategories_,$httpBackend) {
      getCategories = _getCategories_;
      http = $httpBackend;
      http.expectGET('/api/getCategories/').respond({text: "hej"});
    }));

    it('Should be Hello World from  Factory', function () {
      getCategories.getData().success(function (data) {
        expect(data.text).toBe("hej");
      });
      http.flush();
    });
  });

  describe('getWikisWithCategory', function () {
    var getWikisWithCategory, http;
    beforeEach(inject(function (_getWikisWithCategory_,$httpBackend) {
      getWikisWithCategory = _getWikisWithCategory_;
      http = $httpBackend;
      http.expectGET('/api/getWikisWithCategory/1264 births').respond({text: "hej"});
    }));

    it('Should be Hello World from  Factory', function () {
      getWikisWithCategory.getData("1264 births").success(function (data) {
        expect(data.text).toBe("hej");
      });
      http.flush();
    });
  });
});
