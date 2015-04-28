var app =angular.module('myAppRename.controllers', []);
var artikler;
 app.controller('AppCtrl', function ($scope) {
    $scope.title = "Demo Angular, Express and MongoDb";
  })

  app.controller('findWikiCtrl',['$scope','findWikiFactory', function($scope,findWikiFactory) {
    $scope.FindWiki = function(input)
    {
      findWikiFactory.getData(input).success(function(data){
       $scope.data =data;
      })
    }
  }]);

app.controller('wiki',['$scope','wikiFactory','$routeParams', function($scope,wikiFactory,$routeParams) {
  $scope.title = "hej";
  var param1 = $routeParams.title;
  console.log("test"+param1);

  wikiFactory.getData(param1).success(function (data) {
      $scope.data = data;
    });



}]);

