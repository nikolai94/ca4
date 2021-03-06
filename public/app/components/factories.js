'use strict';

/* Factories */

var app = angular.module('myAppRename.factories', [])
app.factory('InfoFactory', function () {
    var info = "Hello World from a Factory";
    var getInfo = function getInfo(){
      return info;
    }
    return {
      getInfo: getInfo
    }
  });
app.factory('findWikiFactory', ['$http', function($http)
{
  var url = "/api/findWiki/";
  var dataFactory = {};
  dataFactory.getData = function(searchStr)
  {
    return $http.get(url+searchStr);
  }
  return dataFactory;

}]);



app.factory('wikiFactory', ['$http', function($http)
{
  var url = "/api/wiki/";
  var dataFactory = {};
  dataFactory.getData = function(str)
  {
    return $http.get(url+str);
  }
  return dataFactory;

}]);


app.factory('getCategories', ['$http', function($http)
{
    var url = "/api/getCategories/";
    var dataFactory = {};
    dataFactory.getData = function()
    {
        return $http.get(url);
    }
    return dataFactory;

}]);


app.factory('getWikisWithCategory', ['$http', function($http)
{
    var url = "/api/getWikisWithCategory/";
    var dataFactory = {};
    dataFactory.getData = function(str)
    {
        return $http.get(url+str);
    }
    return dataFactory;

}]);