var app =angular.module('myAppRename.controllers', ['ui.bootstrap']);
var artikler;
 app.controller('AppCtrl', function ($scope) {
    $scope.title = "Demo Angular, Express and MongoDb";
  })

  app.controller('findWikiCtrl',['$scope','findWikiFactory', function($scope,findWikiFactory) {
    $scope.FindWiki = function(input)
    {
      findWikiFactory.getData(input).success(function(data){
       $scope.data =data;

          $scope.mouseOn = function(title){
              for(var i = 0; i < data.length;i++){
                  if(data[i].title === title){
                    $scope.myValue = true;
                    $scope.text= data[i].abstract;
                }
              }
          };
          $scope.mouseOff = function(){ $scope.myValue = false; $scope.text=""; };

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


app.controller('categories',['$scope','getCategories','$routeParams', function($scope,getCategories,$routeParams) {
    $scope.title = "hej";

    getCategories.getData().success(function (data) {

        $scope.categories = data;
    });



}]);




