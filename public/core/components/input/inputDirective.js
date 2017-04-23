/*global angular*/

var core = angular.module('modernPraxis.core');

core.directive('mpInput', function() {
  return {
    restrict: 'E',
    scope: {
      label: '@',
      value: '=ngModel'
    },
    templateUrl: 'core/components/input/inputDirective.template.html'
  };
});
