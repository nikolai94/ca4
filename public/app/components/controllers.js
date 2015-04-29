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

    var arr = [];
    arr.push("a");
    arr.push("b");
    arr.push("c");
    arr.push("d");
    arr.push("e");
    arr.push("f");
    arr.push("g");
    arr.push("h");
    arr.push("i");
    arr.push("j");
    arr.push("k");
    arr.push("l");
    arr.push("m");
    arr.push("n");
    arr.push("o");
    arr.push("p");
    arr.push("q");
    arr.push("r");
    arr.push("t");
    arr.push("s");
    arr.push("u");
    arr.push("v");
    arr.push("w");
    arr.push("x");
    arr.push("y");
    arr.push("z");

    $scope.alphabet = arr;

    getCategories.getData().success(function (data) {

        $scope.categories = data;
        $scope.categoriesAlp = function(str){
            var newArr = [];
            for(var i =0; i < data.categories.length; i++ ){

                if(data.categories[i] !== null){

                    if(data.categories[i].charAt(0).toLowerCase() === str){
                        //console.log("test: "+ data.categories[i]);
                       newArr.push(data.categories[i]);
                    }
                }
            }

            $scope.categories = {categories: newArr};
        };

    });


}]);


app.controller('inCategori',['$scope','getWikisWithCategory','$routeParams', function($scope,getWikisWithCategory,$routeParams) {
    var param1 = $routeParams.cat;


        getWikisWithCategory.getData(param1).success(function (data) {
            $scope.arr = data;
        })



}]);




