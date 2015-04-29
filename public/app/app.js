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
          .otherwise(
          {redirectTo: "/view2.js"})
}]);
