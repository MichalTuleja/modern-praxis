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
          scope.value = newVal;
      });
    }
  };
});