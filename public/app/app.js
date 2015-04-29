'use strict';

// Declare app level module which depends on views, and components
angular.module('myAppRename', [
  'ngRoute',
  'myAppRename.controllers',
  'myAppRename.directives',
  'myAppRename.services',
  'myAppRename.factories',
  'myAppRename.filters',
  'myAppRename.view1',
  'myAppRename.view2',
  'myAppRename.view3'
]).
config(['$routeProvider', function($routeProvider) {
      $routeProvider
          .when("/findwiki", {
            templateUrl: 'findWiki/findWiki.html',
            controller: "findWikiCtrl"
          })
          .when("/wiki/:title", {
            templateUrl: 'findWiki/wiki.html',
            controller: "wiki"
          })
          .when("/categories", {
              templateUrl: 'categories/index.html',
              controller: "categories"
          })
          .when("/categories/:cat", {
              templateUrl: 'categories/inCategori.html',
              controller: "inCategori"
          })

          .when("/searchWikis2", {
              templateUrl: 'searchWikis2/index.html',
              controller: "searchWikis2"
          })
          .otherwise(
          {redirectTo: "/view2"})
}]);
