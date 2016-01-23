/*global angular*/

var core = angular.module('modernPraxis.core');

core.directive('mpMultibox', function() {
  return {
    restrict: 'E',
    scope: {
      value: '=ngModel'
    },
    //require: '^ngModel',
    templateUrl: 'core/components/multibox/multiboxDirective.template.html',
    link: function(scope, element, attr) {

        scope.$watch('value', function (newVal) {
            console.log('value', newVal);
            scope.value = newVal;
        });
/*
      element.on('keyup', function(e) {
        // Prevent default dragging of selected content
        console.log(scope.ngModel.length);



        scope.$apply(function() {
            scope.ngModel = scope.ngModel;
            console.log(scope.ngModel);
        });
      });
*/

    }
  };
});