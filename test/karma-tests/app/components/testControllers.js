'use strict';

describe('view1Ctrl', function(){
    var scope, ctrl;

    beforeEach(inject(function($controller, $rootScope){
        scope = $rootScope.$new();
        ctrl = $controller("view1Ctrl", { $scope: scope });
    }));
    it('should.....', function(){
        scope.name = "hej";
        scope.$digest();
        except(scope.greeting).toBe("");
    });

});

describe('View2Ctrl', function(){
    var scope, ctrl;

    beforeEach(inject(function($controller, $rootScope){
        scope = $rootScope.$new();
        ctrl = $controller("View2Ctrl", { $scope: scope });
    }));
    it('should...', function(){
        scope.name = "";
        scope.$digest();
        except().toBe("");
    });
});


